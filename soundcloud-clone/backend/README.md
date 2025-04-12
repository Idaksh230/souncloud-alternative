# SoundCloud Clone Backend

This is the backend part of the SoundCloud Clone application. It is built using TypeScript and Express.js, providing a RESTful API for managing audio tracks.

## Features

- **Track Management**: Upload, fetch, and manage audio tracks.
- **Database Integration**: Connects to a database to store track information.
- **Middleware Support**: Utilizes middleware for handling requests and responses.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)
- TypeScript (version 4 or higher)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd soundcloud-clone/backend
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

### Directory Structure

- `src/app.ts`: Entry point of the application.
- `src/controllers/index.ts`: Contains controllers for handling requests.
- `src/models/index.ts`: Defines the data models.
- `src/routes/index.ts`: Sets up the API routes.
- `src/services/index.ts`: Contains business logic for managing tracks.

### API Endpoints

- `GET /tracks`: Fetch all audio tracks.
- `POST /tracks`: Upload a new audio track.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License.