import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

//페이지 컴포넌트
import MainPage from '@/pages/index/index';
import BookMarkPage from '@/pages/bookmark/index';

function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<MainPage />}></Route>
                    <Route path="/search/:id" element={<MainPage />}></Route>
                    <Route path="/bookmark" element={<BookMarkPage />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;
