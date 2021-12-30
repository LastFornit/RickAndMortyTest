import React, { useState, useEffect } from "react";
import CharactersList from "../../charactersList";
import charactersService from "../../../services/characters.service";
import { getFilterQuery } from "../../../utils/filterUtils";
import FilterPanel from "../../filterPanel";
import Pagination from "../../pagination";
import episodesService from "../../../services/episodes.service";

// основной модуль

const CharacterListPage = () => {
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  // selectedCharacter - выбранный персонаж, карточка которого должна отображаться модально
  const [selectedCharacter, setSelectedCharacter] = useState();
  const [currentPage, setCurrentPage] = useState(-1);
  const [filter, setFilter] = useState("");
  const [info, setInfo] = useState();

  // устанавливаем начальную страницу при монтировании
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  // запрашиваем пользователей с сервера при изменении страницы или фильтра
  useEffect(() => {
    getCharacters();
    setSelectedCharacter();
    window.scrollTo(0, 0);
  }, [currentPage, filter]);

  // получаем строку с параметрами фильтрации
  function getFilter(filter, currentPage) {
    return getFilterQuery(filter, currentPage);
  }

  // получаем персонажей
  async function getCharacters() {
    const filterText = getFilter(filter, currentPage); // &name=rick

    try {
      const { info, results } = await charactersService.get(filterText);

      setInfo(info);

      // меняем эписоды у персонажа на новый объект, с которым будем работать далее
      const characterArrayWithEpisode = results.map((result) => {
        return {
          ...result,
          episode: result.episode.map((episode) => {
            return { url: episode, name: getEpisodeNameLocal(episode) };
          }),
        };
      });

      setCharacters(characterArrayWithEpisode);

      updateEpisodes(
        getEpisodesUrls(
          characterArrayWithEpisode.map(
            (characterItem) => characterItem.episode
          )
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  // обнвляем информацию об эпизодах
  async function updateEpisodes(episodesData) {
    const episodesUrl = episodesData
      .filter((item) => !item.name)
      .map((item) => item.url);

    const res = await getEpisodesNamesApi(episodesUrl);

    setEpisodes((prev) => {
      return [
        ...prev,
        ...res.map((item) => {
          return { url: item.url, name: `${item.name} (${item.episode})` };
        }),
      ];
    });
  }

  // получаем список уникальных эпизодов
  function getEpisodesUrls(episodesData) {
    const episodesArray = [];

    episodesData.forEach((items) => {
      items.forEach((item) => {
        const findedItem = episodesArray.find(
          (episode) => episode.url === item.url
        );
        if (!findedItem) {
          episodesArray.push(item);
        }
      });
    });

    return episodesArray;
  }

  // получаем  имя эпизода из состояния , если оно там есть
  function getEpisodeNameLocal(episodeUrl) {
    const findedEpisode = episodes.find((episode) => {
      return episode.url === episodeUrl ? episode.name : "";
    });
    return findedEpisode ? findedEpisode.name : "";
  }

  // обновляем имена эпизодов у персонажей, если эпизоды изменены
  useEffect(() => {
    if (episodes.length !== 0) {
      const newCharacters = characters.map((item) => {
        return {
          ...item,

          episode: [
            ...item.episode.map((e) => {
              return {
                url: e.url,
                name: getEpisodeNameLocal(e.url),
              };
            }),
          ],
        };
      });

      setCharacters([...newCharacters]);
    }
  }, [episodes]);

  // получаем имена эпизодов с сервера
  async function getEpisodesNamesApi(episodesUrls) {
    const result = await episodesService.getAll(
      episodesUrls.map((item) => episodesService.get(item))
    );

    return result;
  }

  const handleClick = (characterItem) => {
    setSelectedCharacter(characterItem);
  };
  const handleClose = () => {
    setSelectedCharacter();
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };
  const handleFilterChange = (filterText) => {
    setFilter(filterText);
    setCurrentPage(1);
  };
  return (
    <>
      <div className="d-flex ">
        <FilterPanel onFilterChange={handleFilterChange} />

        <Pagination
          pagesCount={info?.pages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

        <div className="input-group input-group-lg d-flex justify-content-evenly content">
          <CharactersList
            characters={characters}
            selectedCharacter={selectedCharacter}
            onClick={handleClick}
            onClose={handleClose}
          />
        </div>
      </div>
    </>
  );
};

export default CharacterListPage;
