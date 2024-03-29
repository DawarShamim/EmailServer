# Nodemailer Email Sender

This Node.js script uses Nodemailer to send emails with HTML content read from a file.

## Prerequisites
```
1. Node.js installed on your machine. You can download it from [https://nodejs.org/](https://nodejs.org/).
2. NPM (Node Package Manager) is included with Node.js.
```
## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/DawarShamim/EmailServer.git
Change into the project directory:

```
cd EmailServer
npm install
```

## Usage
1. Create a .env file in the project root with the following content:
```
Email=your-email@gmail.com
Pass=your-email-password
```
2. Replace your-email@gmail.com with your Gmail email address and your-email-password with your Gmail password. Note: It's recommended to use an App Password for Gmail.


3. Run the script:
```
node server.js
```

This will read the HTML content from Template.html, send an email using Nodemailer, and log the response.

### Important Note
Keep your .env file secure and never share it publicly. Add it to your .gitignore file to avoid accidental commits.
Use environment variables for sensitive information (e.g., passwords) to enhance security.
## Contact
If you have any questions or issues, feel free to contact.






