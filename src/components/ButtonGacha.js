import React from 'react';
import { Button, Alert } from 'react-native';

const sendRequestToESP32 = async () => {
    try {
        // Suponhamos que o ESP32 esteja ouvindo em http://seu-endereco-ip:porta/gacha
        const response = await fetch('http://seu-endereco-ip:porta/gacha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const result = await response.json();

        // Aqui você pode processar a resposta do ESP32.
        // Por exemplo, mostrar um alerta com a resposta.
        Alert.alert('Resposta do ESP32', result.message);

    } catch (error) {
        // Em caso de erro (não conseguiu se comunicar, erro na resposta, etc.)
        Alert.alert('Erro', 'Não foi possível se comunicar com o ESP32.');
        console.error('Erro ao comunicar com o ESP32:', error);
    }
};

const ButtonGacha = () => {
    return (
        <Button 
            title="Realizar Gacha" 
            onPress={sendRequestToESP32} 
        />
    );
}

export default ButtonGacha;
