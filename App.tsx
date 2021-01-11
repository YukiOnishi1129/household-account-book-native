import React from 'react';
/* contexts */
import { UserContext } from 'src/contexts/userContext';
/* navigations */
import { AppNavigator } from './src/navigations/AppNavigator';
import { User } from 'src/types/user';
import { initialUser } from 'src/lib/consts';

const App: React.FC = () => {
  const [user, setUser] = React.useState<User>(initialUser);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}>
      <AppNavigator />
    </UserContext.Provider>
  );
};

export default App;
