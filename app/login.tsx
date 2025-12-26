import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp } from 'react-native-reanimated';

import { login } from '@/api/authApi';
import { authStyles as styles } from '@/styles/authStyles';


export default function LoginScreen() {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // async function handleLogin() {
  //   try {
  //     const res = await login({ email, password });

  //     const { accessToken, refreshToken } = res.data;

  //     // 🔐 JWT 저장
  //     await AsyncStorage.setItem('accessToken', accessToken);
  //     await AsyncStorage.setItem('refreshToken', refreshToken);

  //     console.log('JWT 저장 완료');

  //     router.replace('/(tabs)');
  //   } catch (e) {
  //     console.log('로그인 실패', e);
  //   }
  // }

  async function handleLogin() {
  try {
    const res = await login({ email, password });
    console.log("서버 응답:", res.data);
  } catch (e) {
    console.log("로그인 실패", e);
  }
}

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <LinearGradient colors={['#FFD54F', '#FFB300']} style={styles.header}>
        <Text style={styles.headerTitle}>AI Language Learning</Text>
        <Text style={styles.headerSub}>다시 만나서 반가워요 👋</Text>
      </LinearGradient>

      {/* FORM */}
      <Animated.View entering={FadeInUp.duration(500)} style={styles.card}>
        <Text style={styles.title}>로그인</Text>

        <TextInput
          placeholder="이메일"
          style={styles.input}
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="비밀번호"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <LinearGradient colors={['#111', '#333']} style={styles.gradientButton}>
          <TouchableOpacity onPress={handleLogin} activeOpacity={0.8}>
            <Text style={styles.buttonText}>로그인</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity onPress={() => router.push('/register')}>
          <Text style={styles.link}>
            아직 계정이 없으신가요? 회원가입
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
        <Text style={styles.back}>← 홈으로 돌아가기</Text>
      </TouchableOpacity>
    </View>
  );
}
