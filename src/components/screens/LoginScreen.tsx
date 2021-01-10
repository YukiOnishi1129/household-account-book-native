import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
/* types */
import { BeforeLoginRootBottomTabParamList } from "../../types/navigation";

type Props = {
  navigation: BottomTabNavigationProp<BeforeLoginRootBottomTabParamList>;
};

export const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState<string>("");
  const [password, onChangePassword] = React.useState<string>("");

  /**
   * ログイン処理
   */
  const onLogin = () => {
    // 別ページへ遷移
    // navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
          placeholder="メールアドレスを入力ください"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
          placeholder="パスワードを入力ください"
        />
        <TouchableOpacity style={styles.button} onPress={onLogin}>
          <Text style={styles.text}>ログイン</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAEAF8",
  },
  form: {
    width: 350,
    height: 400,
    backgroundColor: "#FAF4F9",
    borderRadius: 20,
  },
  title: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Menlo",
    color: "#D163A2",
  },
  input: {
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    height: 50,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    // borderColor: "gray",
    // borderWidth: 1,
  },
  button: {
    backgroundColor: "#06BADB",
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",
    width: "80%",
    height: 40,
    margin: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "Menlo",
  },
});
