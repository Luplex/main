import React, { useState, useEffect } from "react";
import Importance from "./Importance.jsx";
import ProgressBar from "./ProgressBar.jsx";
import DeleteModal from "./DeleteModal.jsx";

// Composant pour l'entête du tableau
const TableHeader = ({ isAllSelected, toggleAllSelection }) => {
    return (
        <div className="px-4 py-3 bg-indigo-50 rounded-tl-md rounded-tr-md flex items-center">
            <div className="px-3 w-[46px]">
                <input type="checkbox" checked={isAllSelected} onChange={toggleAllSelection} />
            </div>
            <div className="w-[326px] px-4 font-inter font-bold">Critère</div>
            <div className="w-[156px] px-4 font-inter font-bold">Importance</div>
            <div className="w-[156px] px-4 font-inter font-bold">Note /10</div>
            <div className="w-[137px] px-8 font-inter font-bold">Score</div>
        </div>
    );
};

// Composant pour une ligne de données
const DataRow = ({ critere, importance, note, setScore, index, isSelected, toggleSelection }) => {
    const handleInputChange = (e) => {
        const value = e.target.value;
        setScore(critere, value === "" ? "" : Number(value), importance);
    };

    return (
        <div className={`px-4 py-6 flex items-center border-b border-zinc-200 ${isSelected ? "bg-gray-200" : ""}`}>
            <div className="px-3 w-[46px]">
                <input type="checkbox" checked={isSelected} onChange={() => toggleSelection(index)} />
            </div>
            <div className="w-[326px] px-4 font-inter">{critere}</div>
            <div className="w-[156px] px-4 font-inter">
                <Importance importance={importance} />
            </div>
            <div className="w-[156px] px-4 font-inter">{note}</div>
            <div className="w-[137px] px-8 font-inter flex justify-center">
                <ProgressBar score={note} />
            </div>
        </div>
    );
};

// Composant principal pour le tableau
const TableEdit = ({ data, onScoreChange }) => {
    const [selectedIds, setSelectedIds] = useState(new Set());
    const [notes, setScores] = useState(
        data.reduce((acc, item) => {
            acc[item.critere] = { score: item.note, importance: item.importance };
            return acc;
        }, {})
    );

    const toggleSelection = (index) => {
        const newSelectedIds = new Set(selectedIds);
        if (newSelectedIds.has(index)) {
            newSelectedIds.delete(index);
        } else {
            newSelectedIds.add(index);
        }
        setSelectedIds(newSelectedIds);
    };

    const toggleAllSelection = () => {
        const allIndexes = data.map((_, index) => index);
        const newSelectedIds = selectedIds.size === data.length ? new Set() : new Set(allIndexes);
        setSelectedIds(newSelectedIds);
    };

    const isAllSelected = selectedIds.size === data.length;

    const handlesetScore = (critere, value, importance) => {
        setScores((prevNotes) => ({
            ...prevNotes,
            [critere]: { score: value, importance: importance },
        }));
    };

    const calculateTotalScore = () => {
        const totalImportance = Object.values(notes).reduce((sum, { importance }) => sum + Number(importance), 0);
        const weightedScoreSum = Object.values(notes).reduce(
            (sum, { score, importance }) => sum + score * 10 * Number(importance),
            0
        );

        const anyScoreEntered = Object.values(notes).some(({ score }) => score > 0);
        if (!anyScoreEntered) {
            return "-";
        }

        const score = totalImportance > 0 ? Math.round(weightedScoreSum / totalImportance) : "-";
        onScoreChange(score);
        return score;
    };

    useEffect(() => {
        console.log(
            "Importance Totale:",
            Object.values(notes).reduce((sum, { importance }) => sum + importance, 0)
        );
        console.log("Scores:", notes);
    }, [notes]);

    const totalScore = calculateTotalScore();

    return (
        <div>
            <div className="mt-5 mb-5 flex justify-between">
                <DeleteModal />
                <div>
                    <span className="text-gray-900 text-base font-normal font-inter leading-normal">Score : </span>
                    <span className="text-gray-900 text-base font-bold font-inter leading-relaxed">
                        {totalScore === "-" ? totalScore : `${totalScore}/100`}
                    </span>
                </div>
            </div>
            <div className="bg-white rounded-tl-md rounded-tr-md">
                <TableHeader isAllSelected={isAllSelected} toggleAllSelection={toggleAllSelection} />
                {data.map((item, index) => (
                    <DataRow
                        key={index}
                        index={index}
                        isSelected={selectedIds.has(index)}
                        toggleSelection={toggleSelection}
                        {...item}
                        note={notes[item.critere].score}
                        setScore="{handlesetScore}"
                    />
                ))}
            </div>
        </div>
    );
};

export default TableEdit;
