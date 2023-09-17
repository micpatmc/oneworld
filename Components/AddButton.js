import { View, Text, TouchableOpacity, Image } from 'react-native';

const AddButton = ({setNewForm}) => {
    return (
        <TouchableOpacity 
            style={{
                position: 'absolute',
                backgroundColor: 'transparent',
                bottom: 65,
                right: 25,
                width: 50,
                height: 50,
                borderRadius: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: "#808080",
                zIndex: 1
            }} onPress={() => setNewForm(true)}>
            <Image
                source={(require('../assets/oneworld_logo.png'))}
                style={{
                    width: 75,
                    height: 75
                }}
            />

        </TouchableOpacity>
    )
}

export default AddButton;