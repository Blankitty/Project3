import { useRouter } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp } from 'react-native-reanimated';

import { authStyles as styles } from '@/styles/authStyles';


export default function RegisterScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <LinearGradient
        colors={['#FFD54F', '#FFB300']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>AI Language Learning</Text>
        <Text style={styles.headerSub}>새로운 학습을 시작하세요 🚀</Text>
      </LinearGradient>

      {/* FORM */}
      <Animated.View entering={FadeInUp.duration(500)} style={styles.card}>
        <Text style={styles.title}>회원가입</Text>

        <TextInput placeholder="이메일" style={styles.input} autoCapitalize="none" />
        <TextInput placeholder="비밀번호" style={styles.input} secureTextEntry />
        <TextInput placeholder="비밀번호 확인" style={styles.input} secureTextEntry />
        <TextInput placeholder="닉네임" style={styles.input} />

        <LinearGradient colors={['#111', '#333']} style={styles.gradientButton}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.buttonText}>회원가입</Text>
          </TouchableOpacity>
        </LinearGradient>

        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.link}>이미 계정이 있으신가요? 로그인</Text>
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity onPress={() => router.replace('/(tabs)')}>
        <Text style={styles.back}>← 홈으로 돌아가기</Text>
      </TouchableOpacity>
    </View>
  );
}
