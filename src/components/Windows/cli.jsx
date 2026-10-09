
import MacWindows from './MacWindows';
import TerminalModule from 'react-console-emulator';

const Terminal = TerminalModule.default || TerminalModule;

function Cli({ onClose }) {
  return (
    <MacWindows onClose={onClose}>
      <Terminal
        commands={{
          whoami: {
            description: 'Show my profile',
            fn: () => 'Rudra Chaudhary | Developer',
          },

          skills: {
            description: 'Show my technical skills',
            fn: () => 'React, JavaScript, Node.js, MongoDB, C++, Python',
          },

          projects: {
            description: 'Show my projects',
            fn: () => 'Locara | The A&R Store | Aerofit | The Lady Look',
          },

          helpme: {
            description: 'Show contact information',
            fn: () => 'Email: your-email@example.com | GitHub: github.com/yourusername',
          },
        }}
        welcomeMessage="Welcome to Rudra Dashboard Terminal. Type a command to get started."
        promptLabel="rudrachaudhary:$~"
      />
    </MacWindows>
  );
}

export default Cli;
