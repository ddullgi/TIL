# **React Query란?**

React Query는 React 애플리케이션에서 데이터를 가져오고 관리하기 위한 JavaScript 라이브러리입니다. React Query는 클라이언트 측 데이터를 가져오고 관리하기 위한 고급 기능을 제공합니다. 이러한 기능 중 일부는 서버의 상태에 대한 옵티미스틱 업데이트와 캐싱과 같은 것입니다.

# **React Query의 장점**

- 간단하게 구성할 수 있다.
- 데이터를 가져오는 데 걸리는 시간을 최소화한다.
- 서버에서 가져온 데이터를 캐시하여 빠른 성능을 제공한다.
- 데이터를 업데이트하고 삭제하는 데도 사용할 수 있다.
- 옵티미스틱 업데이트를 지원하여 UI 업데이트를 더 빠르게 할 수 있다.

# **React Query의 사용 방법**

React Query는 Query와 Mutation 두 가지 개념으로 이루어져 있습니다. Query는 데이터를 가져오는 데 사용되며, Mutation은 데이터를 업데이트하거나 삭제하는 데 사용됩니다.

쿼리를 가져오는 데 사용할 수 있는 **`useQuery`** 훅을 제공합니다. **`useQuery`** 훅은 두 개의 인수를 받습니다. 첫 번째 인수는 쿼리의 고유 식별자이고, 두 번째 인수는 데이터를 가져오는 함수입니다. 이 함수는 비동기로 처리되며, 쿼리 결과가 캐시됩니다.

**`useMutation`** 훅은 데이터를 업데이트하거나 삭제하는 데 사용됩니다. 이 훅은 업데이트 함수와 함께 사용됩니다. 이 함수는 비동기로 처리되며, 결과는 옵티미스틱 업데이트로 처리됩니다.

React Query는 **`useQueryClient`** 훅을 통해 클라이언트 인스턴스를 반환합니다. 이를 사용하여 쿼리 캐시를 직접 수정하거나, 로컬 데이터를 업데이트하는 데 사용할 수 있습니다.

React Query는 React 애플리케이션에서 데이터 가져오기와 관리하기 위한 강력한 도구입니다. 이를 사용하여 클라이언트 측 데이터를 캐시하고, UI 업데이트를 더 빠르게 처리할 수 있습니다.
