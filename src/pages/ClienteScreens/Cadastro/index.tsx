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

const CadastroCli: React.FC = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");

  const [cep, setCep] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [etapa, setEtapa] = useState(1);

  const avancarEtapa = () => {
    if (etapa < 3) {
      setEtapa(etapa + 1);
    }
  };

  const retrocederEtapa = () => {
    if (etapa > 1) {
      setEtapa(etapa - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>


      {etapa === 1 && (
        <>
        <View style={styles.barra}>
        <View style={styles.progress}>
          <View style={styles.progress_in}></View>
        </View>
        </View>
        <View>
          <TextInput
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
          />
          <TextInput
            placeholder="Repita a Senha"
            value={nome}
            onChangeText={setSenha}
            style={styles.input}
          />
          <TextInput
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
            style={styles.input}
          />
        </View>
        </>
      )}

      {etapa === 2 && (
        <View>
          <TextInput
            placeholder="CEP"
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
            onChangeText={setRua}
            style={styles.input}
          />
                              <TextInput
            placeholder="N°"
            value={numero}
            onChangeText={setNumero}
            style={styles.input}
          />
                              <TextInput
            placeholder="Complemento"
            value={complemento}
            onChangeText={setComplemento}
            style={styles.input}
          />
        </View>
      )}

      <View style={styles.botoesContainer}>
        {etapa === 1 ? (
          <TouchableOpacity onPress={avancarEtapa} style={styles.botao}>
            <Text style={styles.botaoText}>Avançar</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => alert("Cadastro concluído!")} style={styles.botao}>
            <Text style={styles.botaoText}>Concluir</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CadastroCli;
