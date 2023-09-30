import React, { useEffect, useState } from "react";
import "./ListVoice.css";
import ListVoiceCard from "../../components/ListVoiceCard/ListVoiceCard";
import { getVoiceList, getVoiceListAndSearch } from "../../api/axios";
import { Link } from "react-router-dom";

const ListVoice = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [listVoice, setListVoice] = useState([]);
  const [sort, setSort] = useState("old");
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    getVoiceList(currentPage, 10, sort, false)
      .then((json) => setListVoice(json))
      .then((json) => setLoading(false));
  }, [currentPage, sort]);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    getVoiceListAndSearch(currentPage, 10, sort, false, inputSearch)
      .then((json) => setListVoice(json))
      .then((json) => setLoading(false));
  };
  return (
    <div className="listvoice">
      {loading ? (
        <div className="loading">
          <div className="loading-container">
            <div class="loader"></div>
          </div>
        </div>
      ) : (
        <div className="listvoice-container">
          <div className="listvoice-help">
            <div className="listvoice-sort">
              <span>Sắp xếp theo</span>
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                  setLoading(true);
                }}
              >
                <option value="old">Cũ nhất</option>
                <option value="new">Mới nhất</option>
              </select>
            </div>
            <div className="listvoice-search">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Nhập ở đây"
                  value={inputSearch}
                  onChange={(e) => setInputSearch(e.target.value)}
                />
                <button>Tìm kiếm</button>
              </form>
            </div>
          </div>

          <div className="cards">
            {listVoice.map((voice) => (
              <Link
                to={`/voicedetail/${voice.voiceSeller.voiceSellerId}`}
                className="link"
              >
                <ListVoiceCard key={voice.voiceDetailId} voice={voice} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ListVoice;
