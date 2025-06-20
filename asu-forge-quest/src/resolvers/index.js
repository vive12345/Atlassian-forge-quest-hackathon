import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  const coolMessages = [
    "🚀 Forge is AMAZING!",
    "✨ ASU Innovation Hub Activated!",
    "🔥 Building the Future with Code!",
    "🎯 Hackathon Success Unlocked!"
  ];
  
  const randomMessage = coolMessages[Math.floor(Math.random() * coolMessages.length)];
  return `${randomMessage} 🎉`;
});

export const handler = resolver.getDefinitions();