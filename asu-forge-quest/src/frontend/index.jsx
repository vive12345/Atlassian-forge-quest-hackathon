import React, { useEffect, useState } from 'react';
import ForgeReconciler, { 
  Text, 
  Heading, 
  Box, 
  Stack, 
  Lozenge,
  Button
} from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {
  const [data, setData] = useState(null);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    invoke('getText', { example: 'my-invoke-variable' }).then(setData);
  }, []);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <Box padding="space.400">
      <Stack space="space.300">
        {/* Cool Header */}
        <Box backgroundColor="color.background.accent.blue.subtlest" padding="space.300">
          <Stack space="space.200">
            <Heading size="xlarge">🚀 Vipsa's Epic ASU Forge App 🎯</Heading>
            <Text>
              <Lozenge appearance="success">Active</Lozenge>{' '}
              <Lozenge appearance="new">ASU Hackathon 2025</Lozenge>{' '}
              <Lozenge appearance="inprogress">Forge Powered</Lozenge>
            </Text>
          </Stack>
        </Box>

        {/* Main Content */}
        <Stack space="space.300">
          {/* Interactive Section */}
          <Box backgroundColor="color.background.accent.purple.subtlest" padding="space.300">
            <Stack space="space.200">
              <Heading size="medium">🎮 Interactive Demo</Heading>
              <Text>Click the button to see some action!</Text>
              <Button onClick={handleClick} appearance="primary">
                🔥 Click Me! (Clicked {clickCount} times)
              </Button>
              {clickCount > 0 && (
                <Text>
                  <Lozenge appearance="moved">
                    Awesome! You've clicked {clickCount} times! 🎉
                  </Lozenge>
                </Text>
              )}
            </Stack>
          </Box>

          {/* Backend Data */}
          <Box backgroundColor="color.background.accent.orange.subtlest" padding="space.300">
            <Stack space="space.200">
              <Heading size="medium">🔧 Backend Integration</Heading>
              <Text>Data from backend resolver:</Text>
              <Text weight="bold">
                {data ? `✅ ${data}` : '⏳ Loading amazing content...'}
              </Text>
            </Stack>
          </Box>

          {/* Achievement Section */}
          <Box backgroundColor="color.background.accent.yellow.subtlest" padding="space.300">
            <Stack space="space.200">
              <Heading size="medium">🏆 Hackathon Achievement</Heading>
              <Text>🎯 Successfully completed Forge Quest Novice Level</Text>
              <Text>💻 Built with React + Forge UI Kit</Text>
              <Text>🌟 Ready for production deployment</Text>
              <Text>🚀 ASU Innovation at its finest!</Text>
            </Stack>
          </Box>
        </Stack>

        {/* Footer */}
        <Box backgroundColor="color.background.accent.gray.subtlest" padding="space.200">
          <Text>
            Made with ❤️ by Vipsa for ASU Forge Quest Hackathon 2025 | Powered by Atlassian Forge 🔥
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);