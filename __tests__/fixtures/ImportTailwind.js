import {t} from '../../index';
import {Text, View} from 'react-native';
import React from 'react';

class ImportTailwind extends React.Component {
    render() {
        return (
            <View style={[t.flex1]}>
                <Text style={[t.textCenter]}>The integration works</Text>
            </View>
        );
    }
}

export default ImportTailwind;
