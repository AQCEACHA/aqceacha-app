import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { styles } from "./cadastro";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useNavigation } from "@react-navigation/native";

import { BASE_URL } from "@env";
import useCustomFetch, { usePost } from "../../../services/hooks/useFetch";

import { useForm } from "react-hook-form";
import { ScrollView } from "react-native";
import axios from "axios";

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
  const { data } = useCustomFetch(BASE_URL + "/vendedor/todos");
  const { navigate } = useNavigation();

  const onSubmit = (data: any) => {
    Alert.alert(data.nome, data.email);
    console.log(data);
    axios
      .post(BASE_URL + `/vendedor/criar`, data, { data: {} })
      .then((response: { data: any }) => {
        console.log(response.data);
      });
    navigate("Home");
  };

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

  const { register, setValue, handleSubmit } = useForm();

  useEffect(() => {
    register("nomeven");
    register("emailven");
    register("senhaven");
    register("nascimentoven");

    register("apelidoven");
    register("cnpj");
    register("telefoneven");
 
    register("idcidade");
    register("enderecoven");
    register("numeroven");
    register("complementoven");
  }, [register]);

  const retrocederEtapa = (numeroEtapasRetroceder: number) => {
    if (etapa > 1) {
      setEtapa(etapa - numeroEtapasRetroceder);
    }

    if (etapa < 5) {
      setEscolhaCadastro("");
    }
  };

  // const senhasIguais = senha === repetirsenha; // senhas iguais

  return (
    <ScrollView style={styles.container}>
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
            <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder={"Digite seu nome"}
              onChangeText={(text) => setValue("nomeven", text)}
            />
            <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder={"Digite seu email"}
              onChangeText={(text) => setValue("emailven", text)}
            />
            <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder={"Digite sua senha"}
              onChangeText={(text) => setValue("senhaven", text)}
            />
            <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>
              Confirmar Senha
            </Text>
            <TextInput
              style={styles.input}
              placeholder={"Repita sua senha"}
              onChangeText={(text) => setValue("senha", text)}
            />
            <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>
              Data de Nascimento
            </Text>
            <TextInput
              style={styles.input}
              placeholder={"AAAA/MM/DD"}
              onChangeText={(text) => setValue("nascimentoven", text)}
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
            <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>
              Nome da Empresa
            </Text>
            <TextInput
              style={styles.input}
              placeholder={"Digite o nome da sua empresa"}
              onChangeText={(text) => setValue("apelidoven", text)}
            />
            <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>CPF</Text>
            <TextInput
              style={styles.input}
              placeholder={"Digite seu CPF"}
              onChangeText={(text) => setValue("cpf", text)}
            />

            <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>
              Telefone
            </Text>
            <TextInput
              style={styles.input}
              placeholder={"Digite seu telefone"}
              onChangeText={(text) => setValue("telefoneven", text)}
            />
          </View>
        </>
      )}
      {etapa === 4 && (
        <>
          <View>
            <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>
              Nome da Empresa
            </Text>
            <TextInput
              style={styles.input}
              placeholder={"Digite o nome da sua empresa"}
              onChangeText={(text) => setValue("apelidoven", text)}
            />
            <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>CNPJ</Text>
            <TextInput
              style={styles.input}
              placeholder={"Digite seu CNPJ"}
              onChangeText={(text) => setValue("cnpj", text)}
            />
            <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>
              Telefone
            </Text>
            <TextInput
              style={styles.input}
              placeholder={"Digite seu telefone"}
              onChangeText={(text) => setValue("telefoneven", text)}
            />
          </View>
        </>
      )}

      {etapa === 5 && (
        <View>
          <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>CEP</Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite o CEP da sua empresa"}
          />
          <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>Estado</Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite o estado da sua empresa"}
          />
          <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>Cidade</Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite a cidade da sua empresa"}
            onChangeText={(text) => setValue("idcidade", text)}
          />
          <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>Endereço</Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite a rua da sua empresa"}
            onChangeText={(text) => setValue("enderecoven", text)}
          />
          <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>Número</Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite o numero da sua empresa"}
            onChangeText={(text) => setValue("numeroven", text)}
          />
          <Text style={{ fontFamily: "IRegular", fontSize: 18 }}>
            Complemento
          </Text>
          <TextInput
            style={styles.input}
            placeholder={"Digite o complemento"}
            onChangeText={(text) => setValue("complementoven", text)}
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
        <View style={{ paddingBottom: 40 }}>
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
                onPress={handleSubmit(onSubmit)}
                style={styles.botao}
              >
                <Text style={styles.botaoText}>Concluir</Text>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default CadastroVen;