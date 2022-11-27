# 블록 체인 Provider 조사





### 프로바이더(Provider)란?

- 이더리움 네트워크에 대한 연결을 위한 추상화(abstraction)를 제공하는 클래스.
- 블록체인에 대한 읽기 전용 액세스를 제공한다.
- 개인이 노드가 될수없기 떄문에 네트워크의 정보를 대신 제공해주는 것이다.
- 특정한 형식으로 항상 요청해야 하기 때문에, 형식으로의 변경을 도와주는 라이브러리를 사용하기도 한다.



###  web3.js 란?

- 모든 자료와 정보가 분산화, 분권화된 차세대 네트워크 구조로서, 서버가 없는 혁신적인 인터넷 분산형 웹이다
- 주로 자바스크립트 기반으로 이더리움 Dapp이나 서비스를 구현할때 사용되고 통신을 위하여 JSON-RPC API 를 호출한다

![img](https://velog.velcdn.com/images%2Fwrjang96%2Fpost%2Fef01925a-1659-4f5a-808d-4629f778f6c2%2FWed3js%EA%B5%AC%EC%A1%B0%EB%8F%84.jpg)

![img](https://velog.velcdn.com/images%2Fkysung95%2Fpost%2Fef8a75d2-50e3-4b50-ad12-29320a7bf264%2F%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD.-001%20(11).png)



### 공간 109는 `window.ethereum`만 사용

```js

export const SsafyNFTCA = process.env.REACT_APP_SSAFY_NFT;
export const SaleFactoryCA = process.env.REACT_APP_SALE_FACTORY;

export const SsafyTokenCA = process.env.REACT_APP_SSAFY_TOKEN;
export const SpaceTokenCA = process.env.REACT_APP_SPACE_TOKEN;

export const web3 = new Web3(window.ethereum);

// 두가지인자 필요 (abi, address)
export const SsafyNFTContract = new web3.eth.Contract(
	SsafyNFTAbi,
	SsafyNFTCA
);

export const SaleFactoryContract = new web3.eth.Contract(
	SaleFactoryAbi,
	SaleFactoryCA
);

export const SsafyTokenContract = new web3.eth.Contract(
	SsafyTokenAbi,
	SsafyTokenCA
);

export const SaleContract = (ca:any) => {
  return new web3.eth.Contract(SaleAbi, ca);
}
```

- NFT 민팅 시에만 `infura`에 메타데이터와 이미지 파일 저 



## BaaS

#### SaaS (Software as a Service)

-BaaS를 알려면 SaaS를 먼저알아야 합니다.

SaaS는 서비스로서의 소프트웨어라는 말인데, 소프트웨어를 설치하지 않아도 어플리케이션을 이용할 수 있는 것이다. 네이버 클라우드를 생각하면 된다. 우리는 별다른 설치 없이 PC에서 네이버 클라우드에 사진, 영상, 문서를 저장할 수 있다. 이게 당연한 것이 아니라 중앙화된 데이터센터에서 서비스를 받아 인터넷을 통해 빌려 쓰는 구조이기 때문에 가능한 것.

구글 앱스, 세일스포스닷컴, 드롭 박스 등이 포함되어 있음.



#### PaaS (Platform as a Service)

서버와 스토리지, 네트워크 장비 등의 IT인프라를 빌려주면 IaaS(Infrastructure as a Service), 플랫폼을 빌려주면 PaaS(Platform as a Service)이다. 이 중 플랫폼을 빌려주는 PaaS를 이해하면 BaaS를 이해하기 바로 전 단계라고 생각하면 된다. PaaS는 쉽게 이해하려면, 집을 생각하시면 된다. 집을 만들기 위해 자신이 설계부터 재료 준비를 다 해야 되는 것이 아니라 재료가 있고, 설계도도 다양하게 준비 되어있어서 설계도와 재료에 대한 비용을 지불하고 집을 만들기만 하면 됨. 



#### BaaS(Blockchain as a Service)

PaaS가 플랫폼을 쉽게 만들 수 있는 서비스를 제공한다면, BaaS는 블록 체인을 쉽게 만들 수 있는 서비스를 제공하는 것.

아마존, 마이크로소프트, KT 등 대기업에서 BaaS를 운영하고 있기도 합니다.



- 알케미(Alchemy)

알케미는 이더리움 블록체인 개발을 위한 API 노드 서비스를 제공한다. 이더리움 메인 넷과 테스트 넷을 지원하며 최근 이더리움 롤업 프로젝트인 알비트리움 체인을 지원하기 시작했다. 슈퍼노드 기능을 통해 개발 환경을 구성하고 상태를 모니터링한다. 슈퍼노드는 웹서버의 로드 밸런스와 같은 기능으로 확장성을 갖고 있으며 급증하는 트래픽이 오류 없이 처리되도록 지원한다. 컴포저는 비주얼 인터페이스를 사용하여 이더리움 노드에 작업 요청을 하는 디버깅 도구로 다양한 이더리움 API 메서드를 제공한다. 알케미는 모니터링 외에 뛰어난 노티파이 기능을 제공하는데 어드레스 기반 토큰 전송, 드롭된 트랜잭션, 마이닝 트랜잭션 등에 대한 정보를 웹 훅으로 알림을 제공한다. 또한 알케미 Web3는 트래픽의 문제로 실패한 요청을 자동으로 재시도하는 기능으로 개발자들에게 편의를 제공하고 있다.



![img](https://k.kakaocdn.net/dn/bONkZm/btrr5VDY3eZ/UJz8NuXkJeeJfNCEFxutI1/img.png)