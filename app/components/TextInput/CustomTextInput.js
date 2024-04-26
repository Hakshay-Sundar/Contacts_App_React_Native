import React, { Component } from "react";
import { View, TextInput } from "react-native";
import styles from "./styles";

class CustomTextInput extends Component{
    focus = () => {
        this.__input.focus();
    }
    
    render(){
        return (
            <View style={styles.txtInpContainer}>
                <TextInput
                    autoCorrect={false}
                    autoCapitalize="none"
                    style={styles.txtInput}
                    ref={(input) => this.__input = input}
                    {...this.props}
                />
            </View>
        );
    }
};

export default CustomTextInput;