import React, { useState } from 'react';
import '../styles/Imputation.css';

const TrainingProcess: React.FC = () => {
    const [trainingLog, setTrainingLog] = useState<string>('');

    const handleStartTraining = () => {
        setTrainingLog('训练开始...\n');
        // 模拟训练过程
        setTimeout(() => {
            setTrainingLog((prev) => prev + '训练完成！\n');
        }, 3000);
    };

    const handleStopTraining = () => {
        setTrainingLog((prev) => prev + '训练已停止。\n');
    };

    return (
        <div className="section-card">
            <h2>模型训练过程</h2>
            <div className="result-textbox">
                <h4>训练日志：</h4>
                <textarea readOnly value={trainingLog} />
            </div>
            <div className="button-group">
                <button className="submit-button" onClick={handleStartTraining}>
                    开始训练
                </button>
                <button className="submit-button" onClick={handleStopTraining}>
                    停止训练
                </button>
            </div>
        </div>
    );
};

export default TrainingProcess;