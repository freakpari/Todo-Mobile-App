import {View,Text} from "react-native";
import {useTheme} from "@/hooks/useTheme";
import {createSettingsStyles} from "@/assets/styles/settings.styles";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {LinearGradient} from "expo-linear-gradient";
import {Ionicons} from "@expo/vector-icons";

export default function ProgressStats(){
    const {colors} = useTheme()
    const settingsStyles = createSettingsStyles(colors);

    const todos = useQuery(api.todos.getTodos);
    const totalTodos = todos ? todos.length : 0;
    const completedTodos = todos ? todos.filter
        ((todo) =>  todo.isCompleted).length:0;
    const activeTodos = totalTodos - completedTodos ; 
    return (
       <LinearGradient colors={colors.gradients.surface} style={settingsStyles.section}>
          <Text style={settingsStyles.sectionTitle}>Progress Stats</Text>
           <View style={settingsStyles.statsContainer}>
            <LinearGradient colors={colors.gradients.background} style={[settingsStyles.statCard,
                { borderLeftColor:colors.primary}]}>
            <View style={settingsStyles.statIconContainer}>
                <LinearGradient colors={colors.gradients.primary} style={settingsStyles.statIcon}>
                    <Ionicons name="list" color="#fff" size={20} />
                </LinearGradient>
            </View>
                <View>
                    <Text style={settingsStyles.statNumber}>{totalTodos}</Text>
                    <Text style={settingsStyles.statLabel}>Total Todos</Text>
                </View>
            </LinearGradient>

               <LinearGradient colors={colors.gradients.background} style={[settingsStyles.statCard,
                   { borderLeftColor:colors.success}]}>
                   <View style={settingsStyles.statIconContainer}>
                       <LinearGradient colors={colors.gradients.success} style={settingsStyles.statIcon}>
                           <Ionicons name="checkmark-circle" color="#fff" size={20} />
                       </LinearGradient>
                   </View>
                   <View>
                       <Text style={settingsStyles.statNumber}>{completedTodos}</Text>
                       <Text style={settingsStyles.statLabel}>Completed Todos</Text>
                   </View>
               </LinearGradient>

               <LinearGradient colors={colors.gradients.background} style={[settingsStyles.statCard,
                   { borderLeftColor:colors.warning}]}>
                   <View style={settingsStyles.statIconContainer}>
                       <LinearGradient colors={colors.gradients.warning} style={settingsStyles.statIcon}>
                           <Ionicons name="time" color="#fff" size={20} />
                       </LinearGradient>
                   </View>
                   <View>
                       <Text style={settingsStyles.statNumber}>{activeTodos}</Text>
                       <Text style={settingsStyles.statLabel}>Active Todos</Text>
                   </View>
               </LinearGradient>


           </View>
       </LinearGradient>
    )
}