import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { UserContext } from 'src/contexts/userContext';

export const CalendarScreen: React.FC = () => {
  const { setUser } = React.useContext(UserContext);

  const onLogout = () => {
    setUser({
      id: '',
      name: '',
      email: '',
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>カレンダーページ</Text>
      <TouchableOpacity onPress={onLogout}>
        <Text>ログアウト</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
