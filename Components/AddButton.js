import { View, Text, TouchableOpacity, Image } from 'react-native';

const AddButton = () => {
    return(
        <View>
            <TouchableOpacity 
                style={{
                    width: 20,
                    height: 20,
                    borderRadius: '60%'
                }}>
                <Image source={(require('../assets/tree.png'))}/>
            </TouchableOpacity>
        </View>
    )
}

export default AddButton;