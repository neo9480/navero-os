# Navero OS - EXIM Operating System
A comprehensive operating system for the export-import (EXIM) industry, providing role-based dashboards, shipment tracking, marketplace services, payment simulation, and document generation.
## Features
### Core Modules
- **Role-Based Authentication**: 5 distinct user roles (Exporter/Importer, Broker, Bank, Regulator, Admin)
- **Shipment Management**: Complete lifecycle with real-time GPS tracking
- **Interactive Maps**: Live shipment visualization with route simulation
- **Marketplace**: Broker services with commission system
- **Payment Simulation**: Subscription plans with escrow and transaction processing
- **Document Generation**: Professional PDFs for invoices, bills of lading, customs documents
- **Analytics Dashboard**: Role-specific KPIs and reporting
- **Black-to-White Conversion**: Informal payment legalization module
### Technology Stack
- **Frontend (Web)**: React with TypeScript, tailwindcss (4.2), shadcn-ui, lucid-react
- **Frontend (Mobile)**: React Native with Expo
- **Backend**: Express API Routes with PostgreSQL using prisma-orm
- **Authentication**: Custom authentication
- **Database**: PostgreSQL with Prisma ORM
- **Real-time**: Socket.io for live tracking
- **Maps**: Leaflet with OpenStreetMap
- **Charts**: Recharts for analytics
## Project Structure
```
navero-os/
├── web/                 # React web application
├── mobile/              # React Native app (Expo)
├── shared/              # Shared types and utilities
└── docs/                # Documentation
```
## Getting Started
### Prerequisites
- Node.js 18+ and npm
- PostgreSQL 15+
- React Native Expo CLI (for mobile)
### Installation
1. Clone the repository
```bash
git clone <repository-url>
cd navero-os
```
2. Install web dependencies
```bash
cd web
npm install
```
3. Setup database
```bash
npx prisma migrate dev
npx prisma db seed
```
4. Start development server
```bash
npm run dev
```
5. Setup mobile (separate terminal)
```bash
cd ../mobile
npm install
npx expo start
```
### Environment Variables
Create `.env` in the web directory:

## User Roles
### Exporter / Importer
- Create and track shipments
- Book marketplace services
- Generate documents
- View analytics dashboard
### Broker / Freight Forwarder / Customs Agent
- List and manage services
- Receive booking requests
- Track earnings
- Update shipment status
### Bank / Financial Institution
- View payment transactions
- Approve financing
- Audit ledger entries
- Generate compliance reports
### Regulator / Compliance Officer
- Monitor shipments and transactions
- Audit black-to-white conversions
- Generate compliance reports
### Admin / Platform Operator
- Oversee all platform activities
- Manage users and permissions
- View analytics and revenue
- Platform configuration
## Features in Detail
### Shipment Management
- CRUD operations for shipments
- Real-time GPS tracking simulation
- Status management (Pending → In Transit → Delivered)
- Document generation
- Route visualization
### Marketplace System
- Service listings by brokers
- Booking system with escrow
- Commission calculation (5-10%)
- Rating and review system
### Payment Simulation
- Subscription plans (Starter, Pro, Enterprise)
- Dummy payment gateway
- Escrow system
- Transaction ledger
- Automatic commission deduction
### Document Generation
- Commercial invoices
- Bills of lading
- Customs declarations
- Packing lists
- Certificates of origin
## Testing
The prototype includes comprehensive dummy data for testing:
- 50-100 shipments with realistic GPS coordinates
- 10-20 brokers/service providers
- 10-15 exporters/importers
- Complete transaction history
## Documentation
In-app user guides are available for each role, covering:
- Account setup and verification
- Feature walkthroughs
- Payment processes
- Compliance requirements
## Development
### Architecture
- Modular, scalable design
- Role-based access control
- Real-time updates
- Mobile-responsive interface
- Professional SaaS styling
### Future Enhancements
- Real payment processing
- IoT integration for container tracking
- Blockchain for document verification
- AI/ML for route optimization
- Multi-language support
## License
© 2024 Navero OS. All rights reserved.