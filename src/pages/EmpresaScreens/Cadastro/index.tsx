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

import axios from "axios";
import { BASE_URL } from "@env";
import { ScrollView } from "react-native-gesture-handler";

import user from "../../../../assets/user.png"

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

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

  const [nascimentoven, setNascimentoven] = useState("");

  const [telefoneven, setTelefoneven] = useState("");
  const [enderecoven, setEnderecoven] = useState("");
  // const [documentoven, SetDocumentoven] = useState("");
  const [ramo, setRamo] = useState(1);

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

  const [escolhaCadastro, setEscolhaCadastro] = useState("");

  const [etapa, setEtapa] = useState(1);

  const avancarEtapa = (numeroEtapas: number, idEscolha?: number) => {
    if (idEscolha == 1) {
      setEscolhaCadastro("CPF");
    } else if (idEscolha == 2) {
      setEscolhaCadastro("CNPJ");
    }

    if (etapa < 5) {
      setEtapa(etapa + numeroEtapas);
    }
  };

  const retrocederEtapa = (numeroEtapasRetroceder: number) => {
    if (etapa > 1) {
      setEtapa(etapa - numeroEtapasRetroceder);
    }

    if (etapa < 5) {
      setEscolhaCadastro("");
    }
  };

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.progress}>
          <View
            style={[styles.progressInner, { width: `${(etapa - 1) * 25}%` }]}
          />
        </View>
      </View>

      <Text style={styles.titulo}>Cadastro {escolhaCadastro}</Text>

      {etapa === 1 && (
        <>
          <View>
            <Text style={styles.text}>Nome</Text>
            <TextInput
              placeholder="Nome Completo"
              value={nome}
              onChangeText={setNome}
              style={styles.input}
            />
            <Text style={styles.text}>Email</Text>
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
            <Text style={styles.text}>Data de Nascimento</Text>
            <TextInput
              placeholder="AAAA-MM-DD"
              value={nascimentoven}
              onChangeText={setNascimentoven}
              style={styles.input}
            />
          </View>
        </>
      )}

      {etapa === 2 && (
        <>
          <View>
            <TouchableOpacity
              onPress={() => avancarEtapa(1, 1)}
              style={styles.cpfcnpj}
            >
              <Text style={styles.cpfcnpj2}>CPF - Pessoa Física</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => avancarEtapa(2, 2)}
              style={styles.cpfcnpj}
            >
              <Text style={styles.cpfcnpj2}>CNPJ - Pessoa Jurídica</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      {etapa === 3 && (
        <>
          <View>
            <TextInput
              placeholder="Nome Empresa"
              value={nomeEmpresa}
              onChangeText={setNomeEmpresa}
              style={styles.input}
            />
            <TextInput
              maxLength={11}
              placeholder="CPF"
              keyboardType="numeric"
              value={cpf}
              onChangeText={setCpf}
              style={styles.input}
            />
            {/* <TextInput
              placeholder="Documento"
              value={documentoven}
              onChangeText={SetDocumentoven}
              style={styles.input}
            /> */}
            <TextInput
              placeholder="Telefone"
              value={telefoneven}
              onChangeText={setTelefoneven}
              style={styles.input}
            />
          </View>
        </>
      )}
      {etapa === 4 && (
        <>
          <View>
            <Text style={styles.text}>Nome Empresa</Text>
            <TextInput
              placeholder="Nome da Empresa"
              value={nomeEmpresa}
              onChangeText={setNomeEmpresa}
              style={styles.input}
            />
            <Text style={styles.text}>CNPJ</Text>
            <TextInput
              placeholder="CNPJ"
              keyboardType="numeric"
              value={cnpj}
              onChangeText={setCnpj}
              style={styles.input}
            />
            <Text style={styles.text}>Telefone</Text>
            <TextInput
              placeholder="Telefone"
              keyboardType="numeric"
              value={telefoneven}
              onChangeText={setTelefoneven}
              style={styles.input}
            />
            <Text style={styles.text}>Ramo de Atividade</Text>
            <TextInput placeholder="Ramo de Atividade" style={styles.input} />
            {/* <TextInput
              placeholder="Documento"
              value={documentoven}
              onChangeText={SetDocumentoven}
              style={styles.input}
            /> */}
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
        {etapa > 1 && etapa != 2 && (
          <TouchableOpacity
            onPress={() =>
              retrocederEtapa(
                escolhaCadastro === "CPF" && etapa == 5
                  ? 2
                  : escolhaCadastro === "CNPJ" && etapa == 4
                  ? 2
                  : 1
              )
            }
            style={styles.botao}
          >
            <Text style={styles.botaoText}>Voltar</Text>
          </TouchableOpacity>
        )}
        {etapa != 2 &&
          (etapa < 5 ? (
            <TouchableOpacity
              onPress={() => avancarEtapa(etapa == 3 ? 2 : 1)}
              style={styles.botao}
            >
              <Text style={styles.botaoText}>Avançar</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                axiosInstance.post(
                  BASE_URL + "/vendedor/criar",
                  {
                    nomeven: nome,
                    imgven: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
                    emailven: email,
                    senhaven: senha,
                    apelidoven: nomeEmpresa,
                    nascimentoven: nascimentoven,
                    telefoneven: telefoneven,
                    enderecoven: enderecoven,
                    numeroven: numero,
                    complementoven: null,
                    documentoven: "doc",
                    cnpj: cnpj,
                    idcidade: 5010,
                    idramo: 1,
                  },
                  {
                    headers: { "Content-Type": "application/json" },
                    data: {},
                  }
                );
                navigate("Home");
              }}
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
