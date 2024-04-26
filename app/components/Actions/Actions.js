import React from "react";
import styles, { iconSize } from "./styles";
import { View, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const Action = ({ label, text, iconNames}) => {
    return (
        <View style={styles.actionContainer}>
            <View>
                <Text style={styles.actionLabel}>{label}</Text>
                <Text style={styles.actionText}>{text}</Text>
            </View>
            <View style={styles.actionIconContainer}>
                {
                    iconNames.map((iconName, index) => {
                        return <Icon key={index} name={iconName} style={styles.actionIcon} size={iconSize}/>
                    })
                }
            </View>
        </View>
    );
};

export default Action;