import React, { Component } from "react";
import { FlatList } from "react-native";
import { contacts } from "../config/data";
import { ListItem } from "../components/ListItem";

class Contacts extends Component {

    handleRowPress = (item) => {
        console.log(item);
        this.props.navigation.navigate('Details', item);
    };

    render() {
        return (
            <FlatList
                data={contacts}
                renderItem={({ item }) =>
                    <ListItem contact={item} onClick={() => this.handleRowPress(item)} />
                }
                keyextractor={(item) => {
                    const id = item.email.toString();
                    return id;
                }}
            />
        );
    }
}

export default Contacts;