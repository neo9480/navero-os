# Navero EXIM Operating System Implementation Plan

## Overview
Building a comprehensive prototype of Navero, an operating system for the EXIM (export-import) industry. This will be a full-stack web + mobile application with role-based dashboards, shipment tracking, marketplace services, payment simulation, and document generation. All features will use dummy data but demonstrate complete workflows.

## Technology Stack Decisions
- **Frontend (Web)**: React with VITE
- **Frontend (Mobile)**: React Native with Expo
- **Backend**: REST-API Routes (integrated)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Custom auth routes with role-based access
- **UI Components**: Not yet decided
- **Maps**: Leaflet with OpenStreetMap (free, no API keys needed)
- **Charts**: Recharts (React-based)
- **Document Generation**: jsPDF with custom templates
- **Real-time**: Socket.io for shipment tracking
- **State Management**: Zustand (simpler than Redux)
- **Styling**: TailwindCSS

## Project Structure
```
navero/
├── backend/            # express application       
├── frontend/           # vite web application   

```

## User Roles and Permissions

### 1. Exporter / Importer
- **Dashboard**: Shipment analytics, monthly revenue, active shipments map
- **Actions**: Create shipments, track shipments, book services, generate documents
- **Access**: Own shipments, marketplace services, payment history

### 2. Broker / Freight Forwarder / Customs Agent
- **Dashboard**: Earnings analytics, service bookings, commission tracking
- **Actions**: List services, receive bookings, update shipment status
- **Access**: Service listings, booking requests, earnings dashboard

### 3. Bank / Financial Institution (Optional)
- **Dashboard**: Transaction overview, pending approvals, audit logs
- **Actions**: View payments, approve financing, generate reports
- **Access**: All transactions, payment history, compliance data

### 4. Regulator / Compliance Officer (Optional)
- **Dashboard**: Shipment compliance, transaction monitoring, risk alerts
- **Actions**: View shipments, audit transactions, generate compliance reports
- **Access**: All shipment data, black-to-white payment logs

### 5. Admin / Platform Operator
- **Dashboard**: Platform overview, user management, total revenue
- **Actions**: Manage users, oversee all transactions, platform settings
- **Access**: Complete platform visibility and control

## Core Feature Modules

### 1. Authentication & Role Management
- JWT-based authentication
- Role-based access control (RBAC)
- User registration with role selection
- Profile management with role-specific fields
- Session management across web and mobile

### 2. Shipment Management System
- **CRUD Operations**: Create, read, update, delete shipments
- **Status Tracking**: Pending → In Transit → Delivered
- **Route Simulation**: Animated GPS coordinates
- **Document Generation**: Auto-create PDF invoices, bills of lading
- **Real-time Updates**: Socket.io for live status changes

### 3. Interactive Map Tracking
- **Map Provider**: Leaflet with OpenStreetMap tiles
- **Features**:
  - Live shipment positions with animated routes
  - Color-coded status indicators
  - Interactive markers with shipment details
  - Responsive design for mobile
- **Dummy Data**: 50-100 shipments with realistic GPS coordinates

### 4. Marketplace Module
- **Service Listings**: Brokers list services with pricing
- **Booking System**: Exporters browse, select, and book services
- **Commission System**: Navero takes 5-10% commission automatically
- **Rating System**: Users rate brokers after service completion
- **Search & Filter**: By service type, location, price, rating

### 5. Payment Simulation & Subscription
- **Subscription Plans**:
  - Starter: $199/month + 1.5% transaction fee
  - Pro: $499/month + 1% transaction fee
  - Enterprise: $1,499/month + 1-1.5% capped fee
- **Dummy Payment Gateway**: Simulate card, UPI, bank transfers
- **Escrow System**: All payments go through Navero escrow
- **Automatic Deductions**: Commission and fees calculated automatically
- **Ledger System**: Complete transaction history and balance tracking

### 6. Black-to-White Money Module
- **Simulation**: Convert informal payments to formal records
- **Tracking**: Monitor conversion amounts and frequency
- **Compliance**: Generate reports for regulatory purposes
- **Audit Trail**: Complete history of all conversions

### 7. Document Generation
- **Document Types**:
  - Commercial Invoices
  - Bills of Lading
  - Customs Declarations
  - Packing Lists
  - Certificates of Origin
- **Templates**: Professional, customizable layouts
- **Auto-Population**: Fill with shipment and transaction data
- **Download**: PDF generation with company branding

### 8. Analytics & Reporting
- **KPI Dashboards**: Total shipments, revenue, top performers, delays
- **Charts**: Monthly trends, revenue by plan, marketplace analytics
- **Reports**: Custom date ranges, export to CSV/PDF
- **Real-time**: Live updates for active shipments and transactions

## Database Schema Design (PostgreSQL with Prisma)

### Core Tables

#### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL CHECK (role IN ('EXPORTER', 'IMPORTER', 'BROKER', 'BANK', 'REGULATOR', 'ADMIN')),
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  company_name VARCHAR(255),
  phone VARCHAR(50),
  address TEXT,
  avatar_url VARCHAR(500),
  is_verified BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### User Profiles (Role-specific data)
```sql
CREATE TABLE user_profiles (
  user_id UUID PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  business_type VARCHAR(100), -- For exporters/importers
  license_number VARCHAR(100), -- For brokers, banks, regulators
  years_of_experience INTEGER, -- For brokers
  company_registration VARCHAR(100), -- For companies
  tax_id VARCHAR(100),
  preferences JSONB, -- Store role-specific preferences
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Subscription Plans
```sql
CREATE TABLE subscription_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL, -- Starter, Pro, Enterprise
  price DECIMAL(10,2) NOT NULL, -- 199.00, 499.00, 1499.00
  transaction_fee_percentage DECIMAL(5,2) NOT NULL, -- 1.5, 1.0, 1.0-1.5
  features JSONB NOT NULL, -- Array of features
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### User Subscriptions
```sql
CREATE TABLE user_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  plan_id UUID REFERENCES subscription_plans(id),
  status VARCHAR(50) DEFAULT 'ACTIVE' CHECK (status IN ('ACTIVE', 'EXPIRED', 'CANCELLED')),
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  auto_renew BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Shipments
```sql
CREATE TABLE shipments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tracking_number VARCHAR(100) UNIQUE NOT NULL,
  exporter_id UUID REFERENCES users(id),
  importer_id UUID REFERENCES users(id),
  broker_id UUID REFERENCES users(id), -- Optional
  origin_address TEXT NOT NULL,
  origin_lat DECIMAL(10, 8),
  origin_lng DECIMAL(11, 8),
  destination_address TEXT NOT NULL,
  destination_lat DECIMAL(10, 8),
  destination_lng DECIMAL(11, 8),
  current_lat DECIMAL(10, 8),
  current_lng DECIMAL(11, 8),
  status VARCHAR(50) DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'IN_TRANSIT', 'DELIVERED', 'DELAYED', 'CANCELLED')),
  cargo_description TEXT NOT NULL,
  cargo_weight DECIMAL(10,2),
  cargo_value DECIMAL(15,2),
  shipment_date DATE NOT NULL,
  estimated_delivery DATE,
  actual_delivery DATE,
  documents JSONB, -- Array of document references
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Shipment Tracking (GPS simulation)
```sql
CREATE TABLE shipment_tracking (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  shipment_id UUID REFERENCES shipments(id) ON DELETE CASCADE,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW(),
  status VARCHAR(50),
  notes TEXT
);
```

#### Marketplace Services
```sql
CREATE TABLE marketplace_services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  broker_id UUID REFERENCES users(id) ON DELETE CASCADE,
  service_type VARCHAR(100) NOT NULL, -- Customs clearance, freight forwarding, etc.
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  price_unit VARCHAR(50), -- per_shipment, per_container, per_hour
  coverage_area JSONB, -- Geographic coverage
  requirements JSONB, -- Service requirements
  is_available BOOLEAN DEFAULT true,
  rating DECIMAL(3,2) DEFAULT 0.00,
  review_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Service Bookings
```sql
CREATE TABLE service_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id UUID REFERENCES marketplace_services(id),
  shipment_id UUID REFERENCES shipments(id),
  booker_id UUID REFERENCES users(id), -- Exporter/importer who booked
  status VARCHAR(50) DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED')),
  total_amount DECIMAL(10,2) NOT NULL,
  commission_amount DECIMAL(10,2) NOT NULL, -- Navero's commission (5-10%)
  net_amount DECIMAL(10,2) NOT NULL, -- Amount to broker
  booking_date TIMESTAMP DEFAULT NOW(),
  completion_date TIMESTAMP,
  notes TEXT
);
```

#### Payment Transactions
```sql
CREATE TABLE payment_transactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  shipment_id UUID REFERENCES shipments(id), -- Optional
  booking_id UUID REFERENCES service_bookings(id), -- Optional
  subscription_id UUID REFERENCES user_subscriptions(id), -- Optional
  transaction_type VARCHAR(50) NOT NULL CHECK (transaction_type IN ('SUBSCRIPTION', 'SHIPMENT_FEE', 'SERVICE_PAYMENT', 'COMMISSION', 'REFUND')),
  amount DECIMAL(15,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'USD',
  status VARCHAR(50) DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED')),
  payment_method VARCHAR(50), -- Credit card, UPI, bank transfer, etc.
  gateway_transaction_id VARCHAR(255), -- Dummy gateway ID
  escrow_status VARCHAR(50) DEFAULT 'HELD' CHECK (escrow_status IN ('HELD', 'RELEASED', 'REFUNDED')),
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Black-to-White Conversions
```sql
CREATE TABLE black_white_conversions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  original_amount DECIMAL(15,2) NOT NULL,
  converted_amount DECIMAL(15,2) NOT NULL,
  conversion_rate DECIMAL(5,4), -- Conversion fee/Rate
  source_type VARCHAR(100), -- Cash, informal transfer, etc.
  purpose VARCHAR(255),
  status VARCHAR(50) DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'APPROVED', 'REJECTED')),
  approved_by UUID REFERENCES users(id), -- Bank/Regulator who approved
  approved_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Documents
```sql
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  shipment_id UUID REFERENCES shipments(id),
  user_id UUID REFERENCES users(id),
  document_type VARCHAR(100) NOT NULL, -- Invoice, Bill of Lading, Customs, etc.
  title VARCHAR(255) NOT NULL,
  file_url VARCHAR(500) NOT NULL,
  file_size INTEGER,
  template_used VARCHAR(100),
  is_generated BOOLEAN DEFAULT false,
  is_signed BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Reviews and Ratings
```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reviewer_id UUID REFERENCES users(id),
  reviewed_user_id UUID REFERENCES users(id), -- Broker being reviewed
  booking_id UUID REFERENCES service_bookings(id),
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT,
  is_public BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Notifications
```sql
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  type VARCHAR(50) NOT NULL, -- SHIPMENT_UPDATE, BOOKING_CONFIRMED, PAYMENT_RECEIVED, etc.
  related_entity_type VARCHAR(100), -- shipment, booking, payment, etc.
  related_entity_id UUID,
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Implementation Phases

### Phase 1: Foundation (Week 1-2)
- **Setup & Configuration**
  - Initialize Next.js project with TypeScript
  - Configure PostgreSQL with Prisma ORM
  - Set up authentication with NextAuth.js
  - Create basic UI component library with Material-UI
  - Set up React Native Expo project
  - Configure development environment and tooling

- **Database Implementation**
  - Create all database tables with Prisma schema
  - Set up database seeding with dummy data
  - Create relationships and constraints
  - Implement data validation rules

- **Authentication System**
  - Implement user registration with role selection
  - Create login/logout functionality
  - Set up role-based access control middleware
  - Create user profile management

### Phase 2: Core Features (Week 3-4)
- **Shipment Management**
  - CRUD operations for shipments
  - Shipment status tracking system
  - Basic shipment listing and filtering
  - Mobile-responsive shipment interface

- **Map Integration**
  - Integrate Leaflet maps with OpenStreetMap
  - Display shipment locations with markers
  - Create interactive shipment detail popups
  - Implement basic GPS coordinate simulation

- **Dashboard Basics**
  - Create role-based dashboard layouts
  - Implement navigation structure
  - Add basic KPI widgets
  - Create responsive design for mobile

### Phase 3: Advanced Features (Week 5-6)
- **Marketplace System**
  - Service listing and management
  - Booking system with status tracking
  - Commission calculation and distribution
  - Rating and review system

- **Payment Simulation**
  - Subscription plan management
  - Dummy payment gateway integration
  - Escrow system implementation
  - Transaction ledger and history

- **Document Generation**
  - PDF templates for all document types
  - Auto-population with shipment data
  - Document management and storage
  - Download and sharing functionality

### Phase 4: Analytics & Polish (Week 7-8)
- **Analytics & Reporting**
  - Interactive charts with Recharts
  - KPI dashboards for all roles
  - Custom date range filtering
  - Export functionality (CSV/PDF)

- **Real-time Features**
  - Socket.io integration
  - Live shipment tracking updates
  - Real-time notifications
  - Live dashboard updates

- **Mobile App**
  - Complete React Native implementation
  - Native navigation and gestures
  - Offline capabilities
  - Push notifications

### Phase 5: Testing & Documentation (Week 9-10)
- **Quality Assurance**
  - Comprehensive testing for all features
  - Cross-browser and mobile compatibility
  - Performance optimization
  - Security audit and improvements

- **Documentation**
  - In-app user guides for each role
  - API documentation
  - Setup and deployment guides
  - Testing instructions and workflows

## Dummy Data Requirements

### Users (15-20 total)
- **Exporters/Importers (10-12)**: Various company sizes and cargo types
- **Brokers/Freight Forwarders (5-6)**: Different specializations and regions
- **Banks (2)**: Financial institution users
- **Regulators (2)**: Compliance and audit users
- **Admins (2)**: Platform administrators

### Shipments (50-100 total)
- **Geographic Distribution**: Global routes (Asia-Europe, US-Asia, Europe-Africa, etc.)
- **Cargo Types**: Electronics, textiles, machinery, food products, raw materials
- **Status Distribution**: 30% pending, 40% in transit, 25% delivered, 5% delayed
- **Value Range**: $5,000 - $500,000 per shipment

### Marketplace Services (30-40 total)
- **Service Types**: Customs clearance, freight forwarding, insurance, warehousing
- **Price Range**: $100 - $10,000 per service
- **Coverage**: Regional and global service providers
- **Ratings**: Realistic distribution (4.0-4.8 average)

### Transactions
- **Subscriptions**: Mix of all three plan types
- **Service Payments**: Corresponding to marketplace bookings
- **Commissions**: 5-10% of service payments
- **Escrow Holdings**: Active and released transactions

### Documents
- **Types**: Invoices, bills of lading, customs declarations, certificates
- **Templates**: Professional layouts with company branding
- **Auto-generation**: Based on shipment and transaction data

## Authentication & Authorization System

### User Registration Flow
1. **Initial Registration**:
   - Email, password, first name, last name
   - Role selection (EXPORTER, IMPORTER, BROKER, BANK, REGULATOR, ADMIN)
   - Company name (for business roles)
   - Phone number and address
   - Terms of service acceptance

2. **Email Verification**:
   - Send verification email with secure token
   - Token expires after 24 hours
   - User must verify before accessing platform features
   - Resend option available

3. **Role-Specific Information**:
   - **Brokers**: License number, years of experience, service areas
   - **Banks/Regulators**: Institution registration, authorization codes
   - **Exporters/Importers**: Business type, tax ID, company registration
   - **Admins**: System access codes (limited)

4. **Profile Completion**:
   - Avatar upload
   - Company logo
   - Detailed business information
   - Service preferences

### Authentication Methods
- **Primary**: Email + password
- **Two-Factor**: SMS or authenticator app (optional for enhanced security)
- **Social Login**: Google, Microsoft (future enhancement)
- **Session Management**: JWT tokens with refresh mechanism

### Role-Based Access Control (RBAC)

#### Permission Matrix
```
Feature/Resource        | Exporter | Importer | Broker | Bank | Regulator | Admin
-----------------------|----------|----------|--------|------|-----------|-------
Create Shipments        | ✓        | ✓        | ✗      | ✗    | ✗         | ✓
View Own Shipments      | ✓        | ✓        | ✗      | ✗    | ✗         | ✓
View All Shipments      | ✗        | ✗        | ✓*     | ✓    | ✓         | ✓
Manage Services         | ✗        | ✗        | ✓      | ✗    | ✗         | ✓
Book Services           | ✓        | ✓        | ✗      | ✗    | ✗         | ✓
Process Payments        | ✓        | ✓        | ✗      | ✓    | ✗         | ✓
View Transactions       | Own only | Own only | Own only | All | All       | ✓
Generate Documents      | ✓        | ✓        | ✓      | ✗    | ✓         | ✓
Approve Conversions     | ✗        | ✗        | ✗      | ✓    | ✓         | ✓
Manage Users            | ✗        | ✗        | ✗      | ✗    | ✗         | ✓
Platform Analytics      | Limited  | Limited  | Limited| ✓    | ✓         | ✓
```
*Brokers can view shipments they're assigned to

#### Middleware Implementation
- **API Level**: Next.js middleware for route protection
- **Component Level**: HOCs (Higher-Order Components) for React
- **Database Level**: Row-level security policies
- **Mobile Level**: Secure storage with biometric authentication

## Payment Simulation & Escrow System

### Subscription Plans with 1-Month Free Trial

#### Plan Structure
- **Starter**: 1-month free, then $199/month + 1.5% transaction fee
- **Pro**: 1-month free, then $499/month + 1.0% transaction fee
- **Enterprise**: 1-month free, then $1,499/month + 1.0-1.5% capped fee

#### Free Trial Features
- Full access to all plan features during trial period
- No transaction fees during trial
- Can create unlimited shipments and bookings
- Trial expiration notifications at 7 days, 3 days, 1 day
- Automatic subscription activation after trial (requires payment method)

### Dummy Payment Gateway

#### Payment Methods Supported
- **Credit/Debit Cards**: Visa, Mastercard, American Express
- **Bank Transfers**: ACH, SWIFT
- **Digital Wallets**: PayPal (dummy), Apple Pay (dummy)
- **Regional Methods**: UPI (India), Alipay (China), SEPA (Europe)

#### Payment Flow
1. **Payment Initiation**:
   - User selects payment method
   - Enter dummy payment details
   - System validates format (not actual payment)

2. **Payment Processing**:
   - Always succeeds for prototype
   - Generate transaction ID
   - Record payment attempt timestamp

3. **Confirmation**:
   - Immediate success response
   - Generate receipt
   - Update subscription status

### Escrow System Implementation

#### Escrow Flow for Marketplace Services
1. **Payment Capture**:
   - Exporter pays full amount + commission
   - Funds held in Navero escrow account
   - Transaction status: ESCROW_HELD

2. **Service Completion**:
   - Broker marks service as completed
   - Exporter confirms completion (3-day window)
   - Automatic release if no dispute

3. **Fund Release**:
   - Commission (5-10%) transferred to Navero
   - Remaining amount transferred to broker
   - Transaction status: ESCROW_RELEASED

#### Commission Calculation
```javascript
// Example commission calculation
totalBookingAmount = 5000  // Service price
commissionRate = 0.08      // 8% commission
naveroCommission = 400     // 8% of $5000
brokerPayout = 4600        // $5000 - $400
```

### Black-to-White Money Conversion Module

#### Conversion Process
1. **Initiation**:
   - User declares informal payment amount
   - Specify source (cash, informal transfer, etc.)
   - Provide business purpose and documentation

2. **Validation**:
   - Risk assessment algorithm
   - Compliance check against regulations
   - Required documentation verification

3. **Approval Workflow**:
   - Bank users review conversion requests
   - Regulator oversight for large amounts
   - Multi-level approval based on amount thresholds

4. **Conversion**:
   - Record original amount and source
   - Apply conversion fee/rate
   - Generate formal transaction record
   - Update compliance reports

#### Conversion Rules
- **Small amounts** (<$10,000): Automatic approval
- **Medium amounts** ($10,000-$100,000): Bank approval required
- **Large amounts** (>$100,000): Bank + Regulator approval required
- **Conversion rates**: 2-5% fee based on risk assessment

## Real-time Features & Socket.io Integration

### Shipment Tracking Updates
- **GPS Position Updates**: Every 5 minutes for active shipments
- **Status Changes**: Immediate push notifications
- **Route Deviations**: Alerts for unexpected route changes
- **ETA Updates**: Dynamic estimated arrival times

### Marketplace Notifications
- **New Bookings**: Instant notification to brokers
- **Booking Confirmations**: Real-time status to exporters
- **Service Completion**: Automated notifications
- **Payment Updates**: Escrow status changes

### Dashboard Updates
- **KPI Refreshes**: Real-time metrics updates
- **Chart Updates**: Live data visualization
- **Alert System**: Critical event notifications
- **Activity Feeds**: Recent actions and updates

### Socket Events
```javascript
// Client-side examples
socket.on('shipment_update', (data) => {
  updateShipmentOnMap(data);
});

socket.on('booking_confirmed', (data) => {
  showNotification('Service booking confirmed!');
});

socket.on('payment_received', (data) => {
  updateDashboardKPIs();
});
```

## Document Generation System

### Document Templates

#### Commercial Invoice Template
- Company logos and branding
- Sender and receiver details
- Itemized cargo description
- HS codes and tariff classifications
- Payment terms and conditions
- Digital signature capabilities

#### Bill of Lading Template
- Carrier information
- Shipper and consignee details
- Cargo specifications
- Route and port information
- Terms and conditions
- Electronic Bill of Lading (e-BL) support

#### Customs Declaration Template
- Importer/exporter declarations
- Harmonized System codes
- Country of origin certificates
- Valuation methods
- Permit and license references
- Compliance declarations

### Template Variables
```javascript
// Example template variables
{
  company: {
    name: "Global Trade Corp",
    logo: "/logos/global-trade.png",
    address: "123 Commerce St, NY, USA",
    taxId: "US-123456789"
  },
  shipment: {
    trackingNumber: "SH-2024-0892",
    origin: "Shanghai, China",
    destination: "Los Angeles, USA",
    cargoDescription: "Electronics - Consumer Goods",
    value: 125000,
    weight: 2500,
    dimensions: "40ft Container"
  },
  transaction: {
    invoiceNumber: "INV-2024-0892",
    date: "2024-01-15",
    currency: "USD",
    paymentTerms: "NET 30"
  }
}
```

### PDF Generation Features
- **Professional Layouts**: Industry-standard templates
- **Brand Customization**: Company logos and colors
- **Multi-language**: Support for English, Spanish, Chinese
- **Digital Signatures**: Electronic signature integration
- **QR Codes**: Tracking and verification codes
- **Watermarking**: Security and authenticity features

## Analytics & Reporting System

### Dashboard KPIs

#### Exporter/Importer KPIs
- **Total Shipments**: Active, completed, pending shipments
- **Cargo Value**: Total value of all shipments
- **On-Time Delivery Rate**: Percentage of on-time deliveries
- **Service Costs**: Total spent on marketplace services
- **Subscription Status**: Current plan and benefits
- **Document Count**: Generated documents by type

#### Broker KPIs
- **Monthly Revenue**: Earnings from completed services
- **Active Bookings**: Current service bookings
- **Commission Paid**: Total Navero commission paid
- **Client Count**: Total unique clients served
- **Average Rating**: Current service rating
- **Service Utilization**: Most popular services

#### Admin KPIs
- **Platform Revenue**: Total commission and subscription fees
- **User Growth**: New users by role and timeframe
- **Transaction Volume**: Total payment processing volume
- **Active Shipments**: Platform-wide shipment activity
- **Marketplace Activity**: Service bookings and completion rates
- **Compliance Metrics**: Black-to-white conversion statistics

### Chart Types & Data Sources

#### Revenue Analytics
- **Monthly Revenue Trend**: Line chart showing revenue over time
- **Revenue by Plan**: Pie chart showing subscription distribution
- **Service Revenue**: Bar chart showing top-earning services
- **Geographic Revenue**: Map visualization by region

#### Shipment Analytics
- **Shipment Volume**: Monthly shipment counts
- **Status Distribution**: Doughnut chart of shipment statuses
- **Route Analysis**: Most popular shipping routes
- **Delay Analysis**: Reasons and frequency of delays

#### Performance Metrics
- **User Engagement**: Active users by role
- **Service Completion**: Booking completion rates
- **Document Generation**: Document creation trends
- **Platform Utilization**: Feature usage statistics

### Data Refresh Strategy
- **Real-time KPIs**: Refresh every 5 minutes
- **Chart Data**: Refresh every 30 minutes
- **Historical Data**: Daily aggregates stored
- **Manual Refresh**: User-triggered updates available

### Export Capabilities
- **CSV Export**: Raw data for all reports
- **PDF Reports**: Formatted executive summaries
- **Scheduled Reports**: Automated email delivery
- **Custom Date Ranges**: Flexible time period selection

## Mobile App Architecture

### React Native Structure
```
mobile/
├── src/
│   ├── screens/           # Screen components
│   │   ├── auth/         # Login, register, verification
│   │   ├── dashboard/    # Role-based dashboards
│   │   ├── shipments/    # Shipment management
│   │   ├── marketplace/  # Service booking
│   │   ├── payments/     # Payment simulation
│   │   └── profile/      # User profiles
│   ├── components/       # Shared UI components
│   │   ├── common/       # Buttons, inputs, cards
│   │   ├── charts/       # Mobile chart components
│   │   └── maps/         # Map components
│   ├── navigation/       # Navigation setup
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   └── TabNavigator.tsx
│   ├── services/         # API services
│   │   ├── api.ts        # API client configuration
│   │   ├── auth.ts       # Authentication services
│   │   └── storage.ts    # Local storage utilities
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   └── types/            # TypeScript definitions
```

### Mobile-Specific Features
- **Biometric Authentication**: Face ID/fingerprint login
- **Push Notifications**: Real-time shipment and booking alerts
- **Offline Mode**: Critical data available offline
- **GPS Integration**: Current location for service searches
- **Camera Integration**: Document scanning and photo uploads
- **Native Sharing**: Share shipment updates and documents

### Responsive Design Guidelines
- **Mobile First**: Design for mobile, scale to desktop
- **Touch-Friendly**: Minimum 44px touch targets
- **Performance**: Optimize images and API calls
- **Battery Life**: Efficient background updates
- **Network Awareness**: Handle poor connectivity gracefully

## Testing Strategy

### Manual Testing Workflows

#### User Testing by Role

**Exporter/Importer Testing**:
1. **Registration Flow**:
   - Sign up with email verification
   - Complete profile with company details
   - Select subscription plan with 1-month trial
   - Test dummy payment flow

2. **Shipment Management**:
   - Create new shipment with all required fields
   - Upload documents and generate PDFs
   - Track shipment on interactive map
   - Update shipment status

3. **Marketplace Integration**:
   - Browse available services
   - Book customs clearance service
   - Complete dummy payment through escrow
   - Review broker after service completion

**Broker Testing**:
1. **Service Management**:
   - List new marketplace services
   - Set pricing and availability
   - Respond to booking requests
   - Update service completion status

2. **Revenue Tracking**:
   - View earnings dashboard
   - Track commission deductions
   - Monitor booking pipeline
   - Generate financial reports

**Admin Testing**:
1. **Platform Oversight**:
   - Monitor all user activities
   - Review transaction ledger
   - Manage subscription plans
   - Generate platform analytics

#### Cross-Workflow Testing
1. **End-to-End Shipment Flow**:
   - Exporter creates shipment → Broker books service → Payment processes → Documents generate
   - Verify all dashboards update correctly
   - Test real-time notifications

2. **Payment and Escrow Flow**:
   - Service booking → Escrow hold → Commission deduction → Fund release
   - Verify ledger accuracy
   - Test notification triggers

3. **Document Generation Workflow**:
   - Shipment creation → Template selection → Auto-population → PDF download
   - Test all document types
   - Verify data accuracy

#### Device and Browser Testing
- **Web**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS 14+, Android 10+
- **Responsive**: Desktop, tablet, mobile viewports
- **Performance**: Load times and data usage

### Automated Testing Setup
- **Unit Tests**: Jest for React components and utilities
- **Integration Tests**: API endpoint testing
- **E2E Tests**: Critical user workflows
- **Performance Tests**: Load testing for dashboard components

## Deployment & Setup Instructions

### Development Environment Setup

#### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL 15+
- Git
- React Native Expo CLI (for mobile)

#### Installation Steps
```bash
# Clone repository
git clone 
cd navero-os

# Install web dependencies
cd web
npm install

# Setup database
npx prisma migrate dev
npx prisma db seed

# Start development server
npm run dev

# Setup mobile (separate terminal)
cd ../mobile
npm install
npx expo start
```

#### Environment Variables
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/navero"

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Email (for verification)
EMAIL_FROM="noreply@navero.com"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# External APIs
MAP_API_KEY="your-map-api-key" # Optional, default uses OpenStreetMap
```

### Production Deployment

#### Web Application (Vercel Recommended)
```bash
# Build for production
cd web
npm run build

# Deploy to Vercel
vercel --prod
```

#### Database Setup
- **Provider**: Railway, Supabase, or AWS RDS
- **Migrations**: Run `prisma migrate deploy`
- **Seeding**: Production seed data with `prisma db seed`

#### Mobile App Deployment
- **iOS**: App Store Connect with Expo EAS Build
- **Android**: Google Play Console with Expo EAS Build
- **Testing**: TestFlight and Internal Testing tracks

## In-App Documentation

### User Guides by Role

#### Exporter/Importer Guide
1. **Getting Started**: Account setup and verification
2. **Creating Shipments**: Step-by-step shipment creation
3. **Using Marketplace**: Finding and booking services
4. **Document Management**: Generating and downloading documents
5. **Payment Process**: Understanding subscriptions and escrow

#### Broker Guide
1. **Service Setup**: Listing and pricing services
2. **Managing Bookings**: Accepting and completing service requests
3. **Earnings Tracking**: Understanding commission and payouts
4. **Customer Service**: Handling client communications

#### Admin Guide
1. **User Management**: Onboarding and managing users
2. **Platform Monitoring**: Overview of all activities
3. **Compliance**: Regulatory reporting and audits
4. **System Maintenance**: Backup and updates

### Interactive Tutorials
- **First-Time User Experience**: Guided walkthrough
- **Feature Spotlights**: In-app tooltips and help bubbles
- **Video Tutorials**: Embedded how-to videos
- **FAQ Section**: Common questions and answers

### Support Resources
- **Help Center**: Comprehensive knowledge base
- **Contact Support**: In-app messaging system
- **Community Forum**: User discussions and best practices
- **API Documentation**: For custom integrations

## Success Criteria & Metrics

### Functional Requirements
- ✅ All 5 user roles with distinct dashboards and permissions
- ✅ Complete shipment lifecycle with real-time tracking
- ✅ Functional marketplace with booking and commission system
- ✅ Payment simulation with escrow and subscription management
- ✅ Document generation for all EXIM document types
- ✅ Analytics dashboards with role-specific KPIs
- ✅ Mobile app with core functionality
- ✅ Dummy data supporting realistic testing scenarios

### Performance Requirements
- **Page Load**: < 3 seconds for all dashboards
- **API Response**: < 500ms for standard operations
- **Mobile Performance**: < 2 seconds for critical screens
- **Database**: Efficient queries with proper indexing

### User Experience Requirements
- **Intuitive Navigation**: Clear role-based menus
- **Responsive Design**: Seamless mobile and desktop experience
- **Real-time Updates**: Live shipment and booking status
- **Professional Interface**: Enterprise-grade SaaS design
- **Accessibility**: WCAG 2.1 compliance

### Technical Requirements
- **Security**: Role-based access, data encryption, audit trails
- **Scalability**: Architecture supporting future growth
- **Maintainability**: Clean code, comprehensive documentation
- **Extensibility**: Plugin architecture for new features
- **Compliance**: EXIM industry regulations and standards

## Future Enhancement Roadmap

### Phase 2: Advanced Features (Post-Prototype)
- **Real Payments**: Stripe, PayPal, international payment methods
- **IoT Integration**: Real container tracking with GPS/RFID
- **Blockchain**: Smart contracts for escrow and document verification
- **AI/ML**: Route optimization, demand forecasting, fraud detection
- **Advanced Analytics**: Machine learning insights and predictive analytics

### Phase 3: Enterprise Features
- **Multi-language Support**: Global language capabilities
- **Advanced Compliance**: Automated regulatory compliance checks
- **Integration APIs**: ERP, TMS, and customs system integration
- **White-label Solutions**: Custom branding for large enterprises
- **Advanced Security**: Biometric authentication, advanced audit trails

### Technology Evolution
- **Progressive Web App**: Enhanced mobile experience
- **Microservices Architecture**: Scalable backend infrastructure
- **Edge Computing**: Faster global performance
- **5G Integration**: Enhanced real-time capabilities
- **Quantum-Ready**: Future-proof security architecture