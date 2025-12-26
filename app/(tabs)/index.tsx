import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import AnimatedHeaderLogo from '@/components/AnimatedHeaderLogo';
import { ThemedView } from '@/components/themed-view';

import CuteHoneyWave from '@/components/CuteHoneyWave';
import HoneyBubble from '@/components/HoneyBubble';
import HoneySplash from '@/components/HoneySplash';
import HoneyWave from '@/components/HoneyWave';

import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp } from 'react-native-reanimated';

/* =========================
   AnimatedCard
========================= */
function AnimatedCard({
  children,
  onPress,
}: {
  children: React.ReactNode;
  onPress: (x: number, y: number) => void;
}) {
  return (
    <Animated.View entering={FadeInUp.duration(500)} style={styles.card}>
      {/* 카드 전체 웨이브 */}
      <View style={styles.cardWaveFull}>
        <HoneyWave />
        <HoneyBubble size={12} left={10} delay={0} />
        <HoneyBubble size={8} left={40} delay={300} />
        <HoneyBubble size={10} left={70} delay={600} />
      </View>

      {/* 카드 내용 클릭 영역 */}
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={e => {
          const { pageX, pageY } = e.nativeEvent;
          onPress(pageX, pageY);
        }}
        style={{ zIndex: 1 }}
      >
        {children}
      </TouchableOpacity>
    </Animated.View>
  );
}

/* =========================
   Main Screen
========================= */
export default function LanguageLearningScreen() {
  const router = useRouter();
  const [splashes, setSplashes] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  function splashHoney(x: number, y: number) {
    const baseId = Date.now();
    for (let i = 0; i < 5; i++) {
      setSplashes(prev => [
        ...prev,
        {
          id: baseId + i,
          x: x + Math.random() * 30 - 15,
          y,
        },
      ]);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* ================= HEADER ================= */}
      <LinearGradient
        colors={['#FFD54F', '#FFB300']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <CuteHoneyWave />
        <HoneyWave />

        <HoneyBubble size={14} left={40} delay={0} />
        <HoneyBubble size={10} left={90} delay={400} />
        <HoneyBubble size={18} left={160} delay={700} />

        <AnimatedHeaderLogo />

        <View style={styles.nav}>
          <TouchableOpacity onPress={() => router.push('/login')}>
            <Text style={styles.navLink}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push('/register')}>
            <Text style={styles.navLink}>회원가입</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* ================= CONTENT ================= */}
      <ThemedView style={styles.content}>
        {/* PROFILE */}
        <Animated.View entering={FadeInUp.delay(100)} style={styles.profile}>
          <View>
            <Text style={styles.profileTitle}>안녕하세요, 학습자님 👋</Text>
            <Text style={styles.subText}>
              오늘도 스트릭을 이어가세요!
            </Text>
          </View>

          <View style={styles.stats}>
            <Text style={styles.stat}>🔥 7</Text>
            <Text style={styles.stat}>⭐ 1,240</Text>
            <Text style={styles.stat}>❤️ 5</Text>
          </View>
        </Animated.View>

        {/* LANGUAGES */}
        <Text style={styles.sectionTitle}>학습 중인 언어</Text>
        <View style={styles.grid}>
          <AnimatedCard onPress={splashHoney}>
            <Text style={styles.cardTitle}>🇺🇸 영어</Text>
            <Text style={styles.cardDesc}>기초 회화 · 문장 완성</Text>
            <LinearGradient
              colors={['#111', '#333']}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>계속 학습</Text>
            </LinearGradient>
          </AnimatedCard>

          <AnimatedCard onPress={splashHoney}>
            <Text style={styles.cardTitle}>🇯🇵 일본어</Text>
            <Text style={styles.cardDesc}>히라가나 · 단어</Text>
            <LinearGradient
              colors={['#4facfe', '#00f2fe']}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>학습 시작</Text>
            </LinearGradient>
          </AnimatedCard>

          <AnimatedCard onPress={splashHoney}>
            <Text style={styles.cardTitle}>🇪🇸 스페인어</Text>
            <Text style={styles.cardDesc}>단어 · 발음</Text>
            <LinearGradient
              colors={['#fa709a', '#fee140']}
              style={styles.gradientButton}
            >
              <Text style={styles.buttonText}>학습 시작</Text>
            </LinearGradient>
          </AnimatedCard>
        </View>

        {/* FEATURES */}
        <Text style={[styles.sectionTitle, { marginTop: 36 }]}>
          주요 학습 기능
        </Text>

        <View style={styles.grid}>
          <AnimatedCard onPress={splashHoney}>
            <Text style={styles.cardTitle}>📘 레슨 학습</Text>
            <Text style={styles.cardDesc}>단어 → 문장 → 듣기 → 말하기</Text>
          </AnimatedCard>

          <AnimatedCard onPress={splashHoney}>
            <Text style={styles.cardTitle}>🔁 스마트 복습</Text>
            <Text style={styles.cardDesc}>틀린 문제 자동 재출제</Text>
          </AnimatedCard>

          <AnimatedCard onPress={splashHoney}>
            <Text style={styles.cardTitle}>🤖 AI 회화</Text>
            <Text style={styles.cardDesc}>실제 상황 대화 연습</Text>
          </AnimatedCard>

          <AnimatedCard onPress={splashHoney}>
            <Text style={styles.cardTitle}>🏆 리그 경쟁</Text>
            <Text style={styles.cardDesc}>주간 랭킹 & 보상</Text>
          </AnimatedCard>
        </View>
      </ThemedView>

      {/* ================= HONEY SPLASH LAYER ================= */}
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        {splashes.map(s => (
          <HoneySplash
            key={s.id}
            x={s.x}
            y={s.y}
            onFinish={() =>
              setSplashes(prev => prev.filter(p => p.id !== s.id))
            }
          />
        ))}
      </View>

      {/* ================= FOOTER ================= */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 AI Language Learning Project
        </Text>
      </View>
    </ScrollView>
  );
}

/* ================= STYLES ================= */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f7fb',
  },

  header: {
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: 'hidden',
  },

  nav: {
    flexDirection: 'row',
  },

  navLink: {
    marginLeft: 18,
    fontWeight: 'bold',
    color: '#000',
  },

  content: {
    padding: 24,
    width: '100%',
  },

  profile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 22,
    borderRadius: 18,
    marginBottom: 26,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },

  profileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  subText: {
    marginTop: 4,
    color: '#666',
  },

  stats: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  stat: {
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 14,
  },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 22,
    marginBottom: 18,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8,
  },

  cardWaveFull: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
    overflow: 'hidden',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  cardDesc: {
    textAlign: 'center',
    color: '#666',
  },

  gradientButton: {
    marginTop: 14,
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  footer: {
    padding: 24,
    alignItems: 'center',
  },

  footerText: {
    color: '#888',
  },
});
