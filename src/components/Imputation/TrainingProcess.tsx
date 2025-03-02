import React, { useState, useRef } from 'react';
import '../../styles/Imputation.css';

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
        '[2025-01-24 09:21:28] Epoch: 1/300, Iteration: 21/25, Lr: 0.0005, Loss: 0.6721, MAE: 26.83, MSE: 2954.76',
        '[2025-01-24 09:21:48] Epoch: 1/300, Iteration: 22/25, Lr: 0.0005, Loss: 0.6637, MAE: 25.94, MSE: 2863.45',
        '[2025-01-24 09:22:09] Epoch: 1/300, Iteration: 23/25, Lr: 0.0005, Loss: 0.6542, MAE: 25.12, MSE: 2749.18',
        '[2025-01-24 09:22:30] Epoch: 1/300, Iteration: 24/25, Lr: 0.0005, Loss: 0.6428, MAE: 24.37, MSE: 2648.29',
        '[2025-01-24 09:22:50] Epoch: 1/300, Iteration: 25/25, Lr: 0.0005, Loss: 0.6359, MAE: 23.65, MSE: 2536.74',
        '[2025-01-24 09:23:12] Epoch: 2/300, Iteration: 1/25, Lr: 0.0005, Loss: 0.6274, MAE: 22.91, MSE: 2418.53',
        '[2025-01-24 09:23:33] Epoch: 2/300, Iteration: 2/25, Lr: 0.0005, Loss: 0.6183, MAE: 21.74, MSE: 2305.67',
        '[2025-01-24 09:23:55] Epoch: 2/300, Iteration: 3/25, Lr: 0.0005, Loss: 0.6098, MAE: 20.89, MSE: 2217.92',
        '[2025-01-24 09:24:15] Epoch: 2/300, Iteration: 4/25, Lr: 0.0005, Loss: 0.6012, MAE: 19.53, MSE: 2136.08',
        '[2025-01-24 09:24:36] Epoch: 2/300, Iteration: 5/25, Lr: 0.0005, Loss: 0.5924, MAE: 18.76, MSE: 2052.39',
    ];

    // 开始训练
    const handleStartTraining = () => {
        setIsTraining(true);
        setTrainingLog('——————————————————————————training start—————————————————————————————\n');

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