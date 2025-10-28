import {View, Text, Switch} from "react-native";
import {useState} from "react";
import {useTheme} from "@/hooks/useTheme";
import {createSettingsStyles} from "@/assets/styles/settings.styles";
import {LinearGradient} from "expo-linear-gradient";
import {Ionicons} from "@expo/vector-icons";

export default function Prefrences(){
    const [IsAutoSync, setIsAutoSync] = useState(true)
    const [IsNotificationEnabled, setIsNotificationEnabled] = useState(true)
    const {colors, isDarkMode,toggleDarkMode} = useTheme()
    const settingsStyles = createSettingsStyles(colors);

    return (
        <LinearGradient colors={colors.gradients.surface} style={settingsStyles.section}>
            <Text style={settingsStyles.sectionTitle}>Prefrences</Text>
            <View style={settingsStyles.settingItem}>
                <View style={settingsStyles.settingLeft}>
                    <LinearGradient colors={colors.gradients.primary} style={settingsStyles.settingIcon}>
                        <Ionicons name="moon" color="#fff" size={18} />
                    </LinearGradient>
                    <Text style={settingsStyles.settingText}>Dark Mode</Text>
                </View>
                <Switch value={isDarkMode} onValueChange={toggleDarkMode}
                        thumbColor={"#fff"} trackColor={{false : colors.border ,true:colors.primary}}
                        ios_backgroundColor={colors.border}
                />
            </View>

            <View style={settingsStyles.settingItem}>
                <View style={settingsStyles.settingLeft}>
                    <LinearGradient colors={colors.gradients.warning} style={settingsStyles.settingIcon}>
                        <Ionicons name="notifications" color="#fff" size={18} />
                    </LinearGradient>
                    <Text style={settingsStyles.settingText}>Notifications</Text>
                </View>
                <Switch value={IsNotificationEnabled}
                        onValueChange={() => setIsNotificationEnabled( !IsNotificationEnabled)}
                        thumbColor={"#fff"} trackColor={{false : colors.border ,true:colors.warning}}
                        ios_backgroundColor={colors.border}
                />
            </View>

            <View style={settingsStyles.settingItem}>
                <View style={settingsStyles.settingLeft}>
                    <LinearGradient colors={colors.gradients.success} style={settingsStyles.settingIcon}>
                        <Ionicons name="notifications" color="#fff" size={18} />
                    </LinearGradient>
                    <Text style={settingsStyles.settingText}>Auto Synce</Text>
                </View>
                <Switch value={IsAutoSync}
                        onValueChange={() => setIsAutoSync( !IsAutoSync)}
                        thumbColor={"#fff"} trackColor={{false : colors.border ,true:colors.success}}
                        ios_backgroundColor={colors.border}
                />
            </View>

        </LinearGradient>
    )
}