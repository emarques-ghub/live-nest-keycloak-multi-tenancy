Keycloack
- criar realm (que é uma separação de usuarios e regras para uma det aplicacao ou aplicoes)
-criar cliente e mudar access type: confidential (para front->back)

padroes:
SAML2
Azure, google cloud, LDAP
*OpenID connect - OAuth2 (padrao de autorizacao ex. Facebook atoriza o Spotfy a acessar o email do usuario) e obter o secret na "credentials"


sudo service docker start
localhost:8080 para acessar o keycloak console manager

Keycloak para multi-tenancy:
- User Attribute -> criar atributo para diferenciar de qual "cliente" se refere
- No client da aplicação, criar um MAPPER para este atributo - para que no token seja passada esta informacao para por exemplo eu obter transacoes de uma conta = id, nome, saldo, atributo (subdomain)
