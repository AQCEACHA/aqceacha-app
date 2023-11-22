import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { styles } from "./cadastro";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

interface MinLengthInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  minLength: number;
  showError: boolean;
  onFocus?: () => void; // Torna a propriedade onFocus opcional
}

const MinLengthInput: React.FC<MinLengthInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  minLength,
  showError,
  onFocus,
}) => {
  const isLengthValid = value.length >= minLength || !showError;

  return (
    <View>
      <Text style={{ fontFamily: "IRegular" }}>{label}</Text>
      <TextInput
        maxLength={20}
        placeholder={
          isLengthValid ? placeholder : `min. ${minLength} caracteres`
        }
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus} // Adicionado o onFocus aqui
        style={[styles.input, !isLengthValid && styles.inputError]}
      />
      {!isLengthValid && showError && (
        <Text style={{ color: "red", fontFamily: "IRegular" }}>
          A senha deve ter pelo menos {minLength} caracteres.
        </Text>
      )}
    </View>
  );
};

const CadastroVen: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [senha, setSenha] = useState("");
  const [senhaTouched, setSenhaTouched] = useState(false); // mensagem de erro

  const [repetirsenha, setRepetirSenha] = useState("");
  const [repetirSenhaTouched, setRepetirSenhaTouched] = useState(false); // mensagem de erro


  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");

  const [nomeEmpresa, setNomeEmpresa] = useState("");

  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [etapa, setEtapa] = useState(1);


  const avancarEtapa = (numeroEtapas: number) => {
    if (etapa < 5) {
      setEtapa(etapa + numeroEtapas);
    }
  };

  const retrocederEtapa = (numeroEtapasRetroceder: number) => {
    if (etapa > 1) {
      setEtapa(etapa - numeroEtapasRetroceder);
    }
  };

  const { navigate } = useNavigation();

  const senhasIguais = senha === repetirsenha; // senhas iguais


  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.progress}>
          <View
            style={[styles.progressInner, { width: `${(etapa - 1) * 50}%` }]}
          />
        </View>
      </View>

      <Text style={styles.titulo}>Cadastro</Text>

      {etapa === 1 && (
        <>
          <View>
            <Text style={{ fontFamily: "IRegular" }}>Nome</Text>
            <TextInput
              placeholder="Nome Completo"
              value={nome}
              onChangeText={setNome}
              style={styles.input}
            />
            <Text style={{ fontFamily: "IRegular" }}>Email</Text>
            <TextInput
              placeholder="exemplo@gmail.com"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />
            <MinLengthInput
              label="Senha"
              placeholder="min. 8 caracteres"
              value={senha}
              onChangeText={setSenha}
              minLength={8}
              showError={senhaTouched}
              onFocus={() => setSenhaTouched(true)} // Adicionado o onFocus aqui
            />
            <MinLengthInput
              label="Repita a senha"
              placeholder="min. 8 caracteres"
              value={repetirsenha}
              onChangeText={setRepetirSenha}
              minLength={8}
              showError={repetirSenhaTouched}
              onFocus={() => setRepetirSenhaTouched(true)}
            />
            {!senhasIguais && (
              <Text style={{ color: "red", fontFamily: "IRegular" }}>
                As senhas não coincidem.
              </Text>
            )}
            <Text style={{ fontFamily: "IRegular" }}>CPF</Text>
            <TextInput
              maxLength={11}
              placeholder="CPF"
              keyboardType="numeric"
              value={cpf}
              onChangeText={setCpf}
              style={styles.input}
            />
          </View>
        </>
      )}


      {etapa === 2 && (
        <>
          <View>
            <TouchableOpacity onPress={() => avancarEtapa(1)}><Text>CPF</Text></TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity  onPress={() => avancarEtapa(2)}><Text>CNPJ</Text></TouchableOpacity>
          </View>
        </>
      )}
      {etapa === 3 && (
        <>
          <View>
            <TouchableOpacity><Text>CPF</Text></TouchableOpacity>
          </View>

        </>
      )}
      {etapa === 4 && (
        <>

          <View>
            <TouchableOpacity><Text>CNPJ</Text></TouchableOpacity>
          </View>
        </>
      )}


      {etapa === 5 && (
        <View>
          <TextInput
            placeholder="CEP"
            keyboardType="numeric"
            value={cep}
            onChangeText={setCep}
            style={styles.input}
          />
          <TextInput
            placeholder="Estado"
            value={estado}
            onChangeText={setEstado}
            style={styles.input}
          />
          <TextInput
            placeholder="Cidade"
            value={cidade}
            onChangeText={setCidade}
            style={styles.input}
          />
          <TextInput
            placeholder="Rua"
            value={rua}
            onChangeText={setRua}
            style={styles.input}
          />
          <TextInput
            placeholder="Bairro"
            value={bairro}
            onChangeText={setBairro}
            style={styles.input}
          />
          <TextInput
            placeholder="Número"
            keyboardType="numeric"
            value={numero}
            onChangeText={setNumero}
            style={styles.input}
          />
          <TextInput
            placeholder="Complemento"
            keyboardType="numeric"
            value={complemento}
            onChangeText={setComplemento}
            style={styles.input}
          />
        </View>
      )}

      <View style={styles.botoesContainer}>
        {etapa > 1 && etapa != 2 &&(
          <TouchableOpacity onPress={() => retrocederEtapa(etapa == 4 ? 2 : 1)} style={styles.botao}>
            <Text style={styles.botaoText}>Voltar</Text>
          </TouchableOpacity>
        )}
        {etapa != 2 &&(etapa < 5 ? (
          <TouchableOpacity onPress={() => avancarEtapa(etapa == 3 ? 2 : 1)} style={styles.botao}>
            <Text style={styles.botaoText}>Avançar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => navigate("Home")}
            style={styles.botao}
          >
            <Text style={styles.botaoText}>Concluir</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CadastroVen;
