Aqui está a documentação formatada em **Markdown (`.md`)**, pronta para ser copiada para um arquivo `README.md` ou utilizada em sistemas de documentação.

---

# 📏 API de Conversão de Unidades

Esta API fornece endpoints para conversão de diversas unidades de medida, incluindo comprimento, massa, área, temperatura e velocidade.

## 🚀 Como utilizar

A estrutura base da URL é:
`http://localhost:3000/{categoria}/{tipo-de-conversao}/{valor}`

---

## 📑 Endpoints

### 1. Comprimento (`/comprimento`)
| Conversão | Endpoint |
| :--- | :--- |
| Metros para Quilómetros | `/comprimento/metros-para-km/:valor` |
| Metros para Milhas | `/comprimento/metros-para-milhas/:valor` |
| Metros para Pés | `/comprimento/metros-para-pes/:valor` |

**Exemplo:**
`GET http://localhost:3000/comprimento/metros-para-km/5000`

---

### 2. Massa (`/massa` ou `/massas`)
| Conversão | Endpoint |
| :--- | :--- |
| Quilos para Gramas | `/massa/quilos-para-gramas/:valor` |
| Quilos para Libras | `/massa/quilos-para-libras/:valor` |
| Quilos para Onças | `/massas/quilos-para-oncas/:valor` |

**Exemplo:**
`GET http://localhost:3000/massa/quilos-para-libras/5000`

---

### 3. Área (`/area`)
| Conversão | Endpoint |
| :--- | :--- |
| Metros² para Quilómetros² | `/area/metrosqua-para-kmqua/:valor` |
| Metros² para Acres | `/area/metrosqua-para-acresqua/:valor` |
| Metros² para Pés² | `/area/metrosqua-para-pesqua/:valor` |

**Exemplo:**
`GET http://localhost:3000/area/metrosqua-para-kmqua/5000`

---

### 4. Temperatura (`/temperatura`)
| Conversão | Endpoint |
| :--- | :--- |
| Celsius para Fahrenheit | `/temperatura/celsius-para-farenheit/:valor` |
| Celsius para Kelvin | `/temperatura/celsius-para-kelvin/:valor` |
| Fahrenheit para Celsius | `/temperatura/farenheit-para-celsius/:valor` |

**Exemplo:**
`GET http://localhost:3000/temperatura/celsius-para-kelvin/5000`

---

### 5. Velocidade (`/velocidade`)
| Conversão | Endpoint |
| :--- | :--- |
| Km/h para m/s | `/velocidade/kmh-para-ms/:valor` |
| Km/h para mph | `/velocidade/kmh-para-mph/:valor` |
| Nós para Km/h | `/velocidade/nos-para-kmh/:valor` |

**Exemplo:**
`GET http://localhost:3000/velocidade/kmh-para-ms/5000`

---

## 🛠️ Exemplo de Resposta JSON

Todas as requisições retornam um objeto JSON. Exemplo de retorno para `/comprimento/metros-para-km/5000`:

```json
{
  "sucesso": true,
  "valor_original": 5000,
  "unidade_origem": "metros",
  "unidade_destino": "km",
  "resultado": 5
}
```

## 📝 Notas
* O parâmetro `:valor` deve ser sempre um número (inteiro ou decimal utilizando ponto).
* Certifique-se de que o servidor local está a correr na porta `3000`.