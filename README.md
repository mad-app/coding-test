# coding-test

## http call을 통한 ERC-721 배포, 조회

### 목적

* 아래의 기능에서 '배포'와 '조회'에 해당하는 POST API와 GET API, 그리고 스마트컨트랙트를 개발하시오.

### 개발 방법

* 본인의 branch를 따로 만들어서 개발 후 Pull Request 요청
* 본인 브랜치에는 얼마든지 commit 이력을 남겨도 좋음

### 특징

* 블록체인 플랫폼, 언어, 개발 툴 상관 없음
* 기능 우선. 디테일한 부분은 개발 없이 코멘트로 설명해도 좋음

### 기능

#### 배포

* 입력

    ```http
    POST http://host:port/erc721/deploy
    Body
    {
        "name": "ERC-721",
        "symbol": "ERC-721",
        "totalSupply": 1000000,
        "decimals": 18,
        "owner": "0x0000000000000000000000000000000000000000",
        "tokenURI": "http://host:port/erc721/tokenURI"
    }
    ```
* 출력
    ```json
    200 OK
    {
        "contractAddress": "0x0000000000000000000000000000000000000000",
        "transactionHash": "0x0000000000000000000000000000000000000000"
    }
    ```
#### 조회

* 입력
    ```http
    GET http://host:port/erc721/balanceOf/:owner
    ```
* 출력

    ```json
    200 OK
    {
        "balance": 0 
    }
    ```
