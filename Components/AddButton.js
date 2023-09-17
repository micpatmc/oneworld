import { View, Text, TouchableOpacity, Image } from 'react-native';

const AddButton = ({setNewForm}) => {
    return (
        <TouchableOpacity 
            style={{
                position: 'absolute',
                backgroundColor: '#fff',
                bottom: 60,
                right: 25,
                width: 50,
                height: 50,
                borderRadius: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: "#808080",
                borderWidth: 3,
                zIndex: 1
            }} onPress={() => setNewForm(true)}>
            <Image
                source={(require('../assets/plus.png'))}
                style={{
                    width: 20,
                    height: 20
                }}
            />

        </TouchableOpacity>
    )
}

export default AddButton;