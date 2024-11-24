# VoiceTrackr 🎙️

VoiceTrackr is an open-source AI-powered voice communication platform that enables businesses to build no-code phone call systems. With white-label capabilities and straightforward client management, it&apos;s perfect for agencies and businesses looking to automate their communication systems.

![VoiceTrackr Demo](demo.gif)

## 🌟 Features

### Core Features

- 🤖 AI-powered voice agents
- 📞 No-code phone call system
- 🔄 Real-time call handling
- 📊 Usage analytics

  #### NOTE : YOU MUST USE YOUR OWN BACKEND SERVERS TO IMPLEMENT THIS.

### Agency Features

- 👥 Client management dashboard
- 🏷️ White-label solution
- 💰 Custom pricing controls
- 📧 Client invitation system

  #### NOTE : YOU MUST USE YOUR OWN BACKEND SERVERS TO IMPLEMENT THIS.

### Technical Features

- ⚡ Built with Next.js for optimal performance
- 🎨 Tailwind CSS for modern styling
- 🔥 Firebase integration for real-time updates
- 🔒 Secure authentication system

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn
- Firebase account
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/adyanthm/voicetrackr.git
cd voicetrackr
```

2. Install dependencies

```bash
npm install
```

OR

```bash
yarn install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in your environment variables:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
FIREBASE_ADMIN_PROJECT_ID=your_admin_project_id
FIREBASE_ADMIN_CLIENT_EMAIL=your_client_email
FIREBASE_ADMIN_PRIVATE_KEY=your_private_key
```

4. Run the development server

```bash
npm run dev
or
yarn dev
```

Visit `http://localhost:3000` to see your app running.

## 🏗️ Project Structure

```txt
voicetrackr/
├── components/ # React components
├── pages/ # Next.js pages
├── public/ # Static assets
├── styles/ # Global styles
├── lib/ # Utility functions
├── hooks/ # Custom React hooks
└── firebase/ # Firebase configuration
```

## 🔧 Configuration

### Firebase Setup

1. Create a new Firebase project
2. Enable Authentication
3. Set up Firestore
4. Configure Firebase Admin SDK
5. Update security rules

### Environment Variables

Required environment variables:

- Firebase configuration
- Admin SDK credentials
- API keys and secrets

## 🛠️ Development

### Commands

```
npm run dev # Start development server
npm run build # Build for production
npm run start # Start production server
npm run lint # Run ESLint
```

### Code Style

This project uses:

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking

## 🤝 Contributing

We welcome contributions! However, please note that direct commits to the main branch are not accepted. Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build
2. Update the README.md with details of changes to the interface, if applicable
3. The PR will be merged once you have the sign-off of at least one maintainer
4. Please add proper documentation and tests for your changes

### Branch Naming Convention

- Feature: `feature/feature-name`
- Bug Fix: `fix/bug-name`
- Documentation: `docs/what-you-documented`
- Configuration: `config/what-you-configured`

### Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code
- refactor: A code change that neither fixes a bug nor adds a feature
- test: Adding missing tests or correcting existing tests
- chore: Changes to the build process or auxiliary tools

Example: `feat: add user authentication system`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Firebase team for the robust backend solution
- All contributors who have helped shape this project

## 📞 Support

For support, please:

- Open an issue
- Email me at adyanth.mani@gmail.com
- 
## 🏷️ Keywords
`ai` `voice-assistant` `nextjs` `tailwindcss` `firebase` `saas` `white-label` `communication` `voice-recognition` `no-code` `react` `typescript` `openai` `client-management` `agency-tools`

## 🔮 Roadmap

- [ ] Multi-language support
- [ ] Advanced analytics dashboard
- [ ] Custom voice agent training
- [ ] Integration marketplace
- [ ] Mobile app development

---

Built with ❤️ by Adyanth
