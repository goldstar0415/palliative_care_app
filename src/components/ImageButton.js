/**
 * @providesModule @imagebutton
 */

import PropTypes from "prop-types";
import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import {Colors, FontSizes} from '@theme'
import Text from '@text'

export default (props) => {
    const {onPress} = props;

    return(
        <TouchableOpacity onPress={onPress}>
            <Image {...props}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

});
