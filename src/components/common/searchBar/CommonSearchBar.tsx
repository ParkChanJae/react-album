import { useState } from 'react';
import styles from './CommonSearchBar.module.scss';
import { useRecoilState } from 'recoil';
import { searchState } from '@/recoil/atoms/searchState';
import { pageState } from '@/recoil/atoms/pageState';

function CommonSearchBar() {
    const [search, setSearch] = useRecoilState(searchState);
    const [page, setPage] = useRecoilState(pageState);
    const [text, setText] = useState('');
    const onChange = (e) => {
        setText(e.target.value);
    };
    const onSearch = () => {
        if (text === '') {
            // input 태그 안에 빈 값을 검색
            setSearch('Korea');
            setPage(1);
        } else {
            setSearch(text);
            setPage(1);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            if (text === '') {
                // input 태그 안에 빈 값을 검색
                setSearch('Korea');
                setPage(1);
            } else {
                setSearch(text);
                setPage(1);
            }
        }
    };
    return (
        <div className={styles.searchBar}>
            <div className={styles.searchBar__search}>
                <input
                    type="text"
                    placeholder="찾으실 이미지를 검색하세요."
                    className={styles.searchBar__search__input}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                    value={text}
                />
                <img src="src/assets/icons/icon-search.svg" alt="" onClick={onSearch} />
            </div>
        </div>
    );
}

export default CommonSearchBar;
