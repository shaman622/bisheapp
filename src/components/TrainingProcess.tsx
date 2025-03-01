import React, { useState, useRef } from 'react';
import '../styles/Imputation.css';

const TrainingProcess: React.FC = () => {
    const [trainingLog, setTrainingLog] = useState<string>('');
    const [isTraining, setIsTraining] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null); // 用于存储 interval ID

    // 模拟训练日志
    const trainingData = [
        '[2025-01-24 09:18:10] Epoch: 1/300, Iteration: 11/25, Lr: 0.0005, Loss: 0.7683, MAE: 36.85, MSE: 3750.12',
        '[2025-01-24 09:18:29] Epoch: 1/300, Iteration: 12/25, Lr: 0.0005, Loss: 0.7528, MAE: 35.92, MSE: 3624.09',
        '[2025-01-24 09:18:47] Epoch: 1/300, Iteration: 13/25, Lr: 0.0005, Loss: 0.7364, MAE: 34.67, MSE: 3551.83',
        '[2025-01-24 09:19:08] Epoch: 1/300, Iteration: 14/25, Lr: 0.0005, Loss: 0.7219, MAE: 33.41, MSE: 3438.77',
        '[2025-01-24 09:19:27] Epoch: 1/300, Iteration: 15/25, Lr: 0.0005, Loss: 0.7152, MAE: 32.95, MSE: 3392.15',
        '[2025-01-24 09:19:45] Epoch: 1/300, Iteration: 16/25, Lr: 0.0005, Loss: 0.7084, MAE: 31.82, MSE: 3317.43',
        '[2025-01-24 09:20:05] Epoch: 1/300, Iteration: 17/25, Lr: 0.0005, Loss: 0.7027, MAE: 30.74, MSE: 3245.68',
        '[2025-01-24 09:20:27] Epoch: 1/300, Iteration: 18/25, Lr: 0.0005, Loss: 0.6941, MAE: 29.87, MSE: 3173.92',
        '[2025-01-24 09:20:46] Epoch: 1/300, Iteration: 19/25, Lr: 0.0005, Loss: 0.6839, MAE: 28.53, MSE: 3098.14',
        '[2025-01-24 09:21:08] Epoch: 1/300, Iteration: 20/25, Lr: 0.0005, Loss: 0.6795, MAE: 27.61, MSE: 3022.39',
    ];

    // 开始训练
    const handleStartTraining = () => {
        setIsTraining(true);
        setTrainingLog('训练开始...\n');

        // 模拟训练过程
        let index = 0;
        intervalRef.current = setInterval(() => {
            if (index < trainingData.length) {
                setTrainingLog((prev) => {
                    const newLog = trainingData[index];
                    if (newLog) {
                        return prev + newLog + '\n';
                    }
                    return prev; // 如果 newLog 是 undefined，则不追加
                });
                index++;
            } else {
                clearInterval(intervalRef.current!); // 清除 interval
                setIsTraining(false);
                setTrainingLog((prev) => prev + '训练完成！\n');
            }
        }, 1000); // 每 1 秒添加一条日志
    };

    // 停止训练
    const handleStopTraining = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current); // 清除 interval
            intervalRef.current = null; // 重置 interval ID
        }
        setIsTraining(false);
        setTrainingLog((prev) => prev + '训练已停止。\n');
    };

    return (
        <div className="section-card">
            <h2>模型训练过程</h2>
            <div className="result-textbox">
                <h4>训练日志：</h4>
                <textarea readOnly value={trainingLog} rows={15} />
            </div>
            <div className="button-group">
                <button
                    className="submit-button"
                    onClick={handleStartTraining}
                    disabled={isTraining} // 防止重复点击
                >
                    开始训练
                </button>
                <button
                    className="submit-button"
                    onClick={handleStopTraining}
                    disabled={!isTraining} // 只有在训练中才能停止
                >
                    停止训练
                </button>
            </div>
        </div>
    );
};

export default TrainingProcess;