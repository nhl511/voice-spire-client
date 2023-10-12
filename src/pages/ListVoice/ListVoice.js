import React, { useEffect, useState } from "react";
import "./ListVoice.css";
import ListVoiceCard from "../../components/ListVoiceCard/ListVoiceCard";
import { getVoiceList, getVoiceListAndSearch } from "../../api/axios";
import { Link } from "react-router-dom";

const ListVoice = () => {
  const [loading, setLoading] = useState(true);
  const [listVoice, setListVoice] = useState([]);
  const [sort, setSort] = useState("old");
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    getVoiceListAndSearch(1, 100, sort, false, inputSearch)
      .then((json) => setListVoice(json))
      .then((json) => setLoading(false));
  }, [inputSearch, sort]);

  return (
    <div className="listVoice">
      <div className="listVoice-container">
        <div className="listVoice-help">
          <div className="listVoice-search">
            <input
              type="search"
              placeholder="Nhập ở đây"
              value={inputSearch}
              onChange={(e) => {
                setInputSearch(e.target.value);
                setLoading(true);
              }}
            />
          </div>
          <div className="listVoice-sort">
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
        </div>

        <div className="cards">
          {loading ? (
            <div className="loading">
              <div className="loading-container">
                <div class="loader"></div>
              </div>
            </div>
          ) : (
            listVoice.map((voice) => (
              <Link
                to={`/voicedetail/${voice.voiceSeller.voiceSellerId}`}
                className="link"
              >
                <ListVoiceCard key={voice.voiceDetailId} voice={voice} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ListVoice;
