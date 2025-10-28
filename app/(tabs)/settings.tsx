import {ScrollView, Text, View} from "react-native";
import {useTheme} from "@/hooks/useTheme";
import {createSettingsStyles} from "@/assets/styles/settings.styles";
import {SafeAreaView} from "react-native-safe-area-context";
import {LinearGradient} from "expo-linear-gradient";
import {Ionicons} from "@expo/vector-icons";
import ProgressStats from "@/components/ProgressStats";
import Prefrences from "@/components/Prefrences";
import DangerZone from "@/components/DangerZone";

export default function SettingScreen() {
    const {colors} = useTheme()
    const settingsStyles = createSettingsStyles(colors);

    return (
       <LinearGradient style={settingsStyles.container } colors={colors.gradients.background}>
           <SafeAreaView style={settingsStyles.safeArea}>
               <View style={settingsStyles.header}>
                   <View style={settingsStyles.titleContainer}>
                       <LinearGradient colors={colors.gradients.primary} style={settingsStyles.iconContainer}>
                            <Ionicons name="settings" size={28} color="#fff" />
                       </LinearGradient>
                       <Text style={settingsStyles.title}>Settings</Text>
                   </View>
               </View>
               <ScrollView style={settingsStyles.scrollView} contentContainerStyle={settingsStyles.content}
               showsVerticalScrollIndicator={false}>
                <ProgressStats />
                <Prefrences />
                <DangerZone />
               </ScrollView>
           </SafeAreaView>
       </LinearGradient>
    );
}