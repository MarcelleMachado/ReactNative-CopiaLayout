import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topoCelular} />
      <View style={styles.barraMenuFixo}>
        <View style={styles.barraMenuIcones}>
          <Image
            source={require('./assets/icons/menu-aberto.png')}
            style={styles.iconeMenu}
          />
          <Image
            source={require('./assets/images/logoAmericanas-01.png')}
            style={styles.logo}
          />
          <Image
            source={require('./assets/icons/shopping-basket-01.png')}
            style={styles.iconeCesta}
          />
        </View>
        <View style={styles.barraMenuPesquisa}>
          <TextInput
            style={styles.barraPesquisa}
            placeholder='busque aqui seu produto'>
          </TextInput>  
        </View>
        <View style={styles.barraMenuCEP}>
          <Image
              source={require('./assets/icons/tag.png')}
              style={styles.iconeCEP}
            />
          <Text style={{color: 'white', fontSize: 11, marginLeft: 3}}>informe seu CEP</Text>
          <Image
              source={require('./assets/icons/next-01.png')}
              style={styles.iconeSeta}
            />
        </View>
      </View>
      <ScrollView>
        <View style={styles.barraCarrossel}>
          <Image
              source={require('./assets/images/oferta.jpeg')}
              style={{width: '100%', height: '95%', borderRadius: 10}}
          />
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <View style={styles.circuloCinza} />
          <View style={styles.circuloCinza} />
          <View style={styles.circuloCinza} />
          <View style={styles.circuloCinza} />
          <View style={styles.circuloCinza} />
          <View style={styles.circuloCinza} />
          <View style={styles.circuloCinza} />
          </View>
        </View>
        <View style={styles.barraOferta}>
          <Image
              source={require('./assets/images/oferta-02.jpeg')}
              style={{width: '100%', height: '100%', borderRadius: 10}}
          />
        </View>
        <View style={styles.barraLogin}>
        <Text style={{fontSize: 14,fontWeight: 'bold'}}>olá! entre na sua conta :) {'\n'}</Text>
        <Text style={{fontSize: 12, textAlign: 'center'}}>aqui tem ofertas personalizadas pra você e tudo {'\n'} em um só lugar. Veeem! {'\n'}</Text>
        <TouchableOpacity style={styles.botao}><Text style={{fontSize: 12, color: 'white'}}>entrar ou cadastrar</Text></TouchableOpacity>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.barraQuadrados}>
          <View style={styles.quadradoOferta}>
            <View style={styles.quadradoImagem}>
              <Image
                source={require('./assets/images/ofertasQuadrados/quad01.jpeg')}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            </View>
            <Text style={{fontSize: 14}}>entrega rápida</Text>
          </View>
          <View style={styles.quadradoOferta}>
            <View style={styles.quadradoImagem}>
              <Image
                source={require('./assets/images/ofertasQuadrados/quad02.jpeg')}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            </View>
            <Text style={{fontSize: 14}}>mercaaado</Text>
          </View>
          <View style={styles.quadradoOferta}>
            <View style={styles.quadradoImagem}>
              <Image
                source={require('./assets/images/ofertasQuadrados/quad03.jpeg')}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            </View>
            <Text style={{fontSize: 14}}>confira</Text>
          </View>
          <View style={styles.quadradoOferta}>
            <View style={styles.quadradoImagem}>
              <Image
                source={require('./assets/images/ofertasQuadrados/quad04.jpeg')}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            </View>
            <Text style={{fontSize: 14}}>lojas oficiais</Text>
          </View>
          <View style={styles.quadradoOferta}>
            <View style={styles.quadradoImagem}>
              <Image
                source={require('./assets/images/ofertasQuadrados/quad05.jpeg')}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            </View>
            <Text style={{fontSize: 14}}>use nas lojas</Text>
          </View>
          <View style={styles.quadradoOferta}>
            <View style={styles.quadradoImagem}>
              <Image
                source={require('./assets/images/ofertasQuadrados/quad06.jpeg')}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            </View>
            <Text style={{fontSize: 14}}>#ObaCupom</Text>
          </View>
          <View style={styles.quadradoOferta}>
            <View style={styles.quadradoImagem}>
              <Image
                source={require('./assets/images/ofertasQuadrados/quad07.jpeg')}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            </View>
            <Text style={{fontSize: 14}}>confira aqui</Text>
          </View>
          <View style={styles.quadradoOferta}>
            <View style={styles.quadradoImagem}>
              <Image
                source={require('./assets/images/ofertasQuadrados/quad08.jpeg')}
                style={{width: '100%', height: '100%', borderRadius: 10}}
              />
            </View>
            <Text style={{fontSize: 14}}>ofertas{'\n'}do dia</Text>
          </View>
        </ScrollView>
        <Text style={{marginLeft:'4%', fontSize: 16, fontWeight: 'bold'}}>produtos mais vendidos na americanas</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.barraRetangulos}>
          <View style={styles.retanguloImagem}>
            <Image
              source={require('./assets/images/ofertasProdutosMaisVendidos/prod01.jpeg')}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          </View>
          <View style={styles.retanguloImagem}>
            <Image
              source={require('./assets/images/ofertasProdutosMaisVendidos/prod02.jpeg')}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          </View>
          <View style={styles.retanguloImagem}>
            <Image
              source={require('./assets/images/ofertasProdutosMaisVendidos/prod03.jpeg')}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          </View>
          <View style={styles.retanguloImagem}>
            <Image
              source={require('./assets/images/ofertasProdutosMaisVendidos/prod04.jpeg')}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          </View>
          <View style={styles.retanguloImagem}>
            <Image
              source={require('./assets/images/ofertasProdutosMaisVendidos/prod05.jpeg')}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          </View>
          <View style={styles.retanguloImagem}>
            <Image
              source={require('./assets/images/ofertasProdutosMaisVendidos/prod06.jpeg')}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          </View>
          <View style={styles.retanguloImagem}>
            <Image
              source={require('./assets/images/ofertasProdutosMaisVendidos/prod07.jpeg')}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          </View>
          <View style={styles.retanguloImagem}>
            <Image
              source={require('./assets/images/ofertasProdutosMaisVendidos/prod08.jpeg')}
              style={{width: '100%', height: '100%', borderRadius: 20}}
            />
          </View>
        </ScrollView>
      </ScrollView> 
    </View>
  );
}
