import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { DigitInput, Modal, ModalProps } from "../../components";
import { buttonStyle } from "../../styles/buttons";
import { textStyle } from "../../styles/text";

const StartGameModal = ({
  digit,
  onBegin,
  visible,
  onClose,
  onDigitChange,
}: ModalProps & { digit: string; onDigitChange: (value: string) => void }) => {
  const isDisabled = digit.length < 4;

  const onModalClose = () => {
    onDigitChange("");
    onClose();
  };

  return (
    <Modal visible={visible} onClose={onModalClose}>
      <Text style={textStyle.modalTitle}>
        Allez hop ! Donnez-nous votre numéro secret !
      </Text>
      <DigitInput digit={digit} onDigitChange={onDigitChange} />
      <View style={{ marginVertical: 20 }}>
        <Text style={textStyle.h6}>
          1. Choisissez un nombre à quatres chiffres.
        </Text>
        <Text style={textStyle.h6}>2. Tous les chiffres sont uniques.</Text>
        <Text style={textStyle.h6}>
          3. Le nombre ne doit pas commencer par zéro.
        </Text>
      </View>
      <View style={{ flex: 1 }} />
      <TouchableOpacity
        style={[
          buttonStyle.button,
          buttonStyle.dark,
          isDisabled && buttonStyle.disabled,
        ]}
        disabled={isDisabled}
        onPress={onBegin}
      >
        <Text style={[buttonStyle.text, buttonStyle.whiteText]}>
          On commence !
        </Text>
      </TouchableOpacity>
    </Modal>
  );
};

export default StartGameModal;
