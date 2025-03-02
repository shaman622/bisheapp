import React, { useState, useRef } from 'react';
import '../../styles/Imputation.css';

const TrainingProcess: React.FC = () => {
    const [trainingLog, setTrainingLog] = useState<string>('');
    const [isTraining, setIsTraining] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null); // 用于存储 interval ID

    // 模拟训练日志
    const trainingData = [
        '[2025-02-28 08:31:45] Epoch: 1/100, Iteration: 1/16, Lr: 0.0005, Loss: 10.421, MAE: 161.72, RMSE: 242.58',
        '[2025-02-28 08:34:15] Epoch: 1/100, Iteration: 2/16, Lr: 0.0005, Loss: 9.823, MAE: 153.80, RMSE: 230.70',
        '[2025-02-28 08:36:25] Epoch: 1/100, Iteration: 3/16, Lr: 0.0005, Loss: 9.104, MAE: 145.20, RMSE: 217.80',
        '[2025-02-28 08:39:35] Epoch: 1/100, Iteration: 4/16, Lr: 0.0005, Loss: 8.332, MAE: 136.90, RMSE: 205.35',
        '[2025-02-28 08:42:05] Epoch: 1/100, Iteration: 5/16, Lr: 0.0005, Loss: 7.681, MAE: 129.50, RMSE: 194.25',
        '[2025-02-28 08:44:55] Epoch: 1/100, Iteration: 6/16, Lr: 0.0005, Loss: 7.021, MAE: 122.40, RMSE: 183.60',
        '[2025-02-28 08:47:10] Epoch: 1/100, Iteration: 7/16, Lr: 0.0005, Loss: 6.453, MAE: 116.30, RMSE: 174.45',
        '[2025-02-28 08:49:40] Epoch: 1/100, Iteration: 8/16, Lr: 0.0005, Loss: 5.942, MAE: 110.80, RMSE: 166.20',
        '[2025-02-28 08:52:50] Epoch: 1/100, Iteration: 9/16, Lr: 0.0005, Loss: 5.403, MAE: 105.50, RMSE: 158.25',
        '[2025-02-28 08:55:20] Epoch: 1/100, Iteration: 10/16, Lr: 0.0005, Loss: 4.981, MAE: 101.20, RMSE: 151.80',
        '[2025-02-28 08:57:45] Epoch: 1/100, Iteration: 11/16, Lr: 0.0005, Loss: 4.563, MAE: 97.60, RMSE: 146.40',
        '[2025-02-28 09:00:15] Epoch: 1/100, Iteration: 12/16, Lr: 0.0005, Loss: 4.122, MAE: 94.30, RMSE: 141.45',
        '[2025-02-28 09:03:25] Epoch: 1/100, Iteration: 13/16, Lr: 0.0005, Loss: 3.854, MAE: 91.80, RMSE: 137.70',
        '[2025-02-28 09:05:55] Epoch: 1/100, Iteration: 14/16, Lr: 0.0005, Loss: 3.521, MAE: 89.50, RMSE: 134.25',
        '[2025-02-28 09:08:10] Epoch: 1/100, Iteration: 15/16, Lr: 0.0005, Loss: 3.217, MAE: 87.30, RMSE: 130.95',
        '[2025-02-28 09:10:40] Epoch: 1/100, Iteration: 16/16, Lr: 0.0005, Loss: 2.954, MAE: 85.10, RMSE: 127.65',
        '[2025-02-28 09:13:20] Epoch: 2/100, Iteration: 1/16, Lr: 0.0005, Loss: 2.731, MAE: 83.20, RMSE: 124.80',
        '[2025-02-28 09:15:50] Epoch: 2/100, Iteration: 2/16, Lr: 0.0005, Loss: 2.503, MAE: 81.00, RMSE: 121.50',
        '[2025-02-28 09:18:30] Epoch: 2/100, Iteration: 3/16, Lr: 0.0005, Loss: 2.312, MAE: 78.90, RMSE: 118.35',
        '[2025-02-28 09:21:10] Epoch: 2/100, Iteration: 4/16, Lr: 0.0005, Loss: 2.145, MAE: 76.80, RMSE: 115.20',
        '[2025-02-28 09:23:40] Epoch: 2/100, Iteration: 5/16, Lr: 0.0005, Loss: 1.997, MAE: 74.70, RMSE: 112.05',
        '[2025-02-28 09:26:20] Epoch: 2/100, Iteration: 6/16, Lr: 0.0005, Loss: 1.872, MAE: 72.90, RMSE: 109.35',
        '[2025-02-28 09:28:50] Epoch: 2/100, Iteration: 7/16, Lr: 0.0005, Loss: 1.743, MAE: 71.20, RMSE: 106.80',
        '[2025-02-28 09:31:30] Epoch: 2/100, Iteration: 8/16, Lr: 0.0005, Loss: 1.631, MAE: 69.50, RMSE: 104.25'
    ];

    // 开始训练
    const handleStartTraining = () => {
        setIsTraining(true);
        setTrainingLog('——————————————————————————Training start—————————————————————————————\n');

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
                setTrainingLog((prev) => prev + '—————————————————————————— Training End ————————————————————————————\n');
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
        setTrainingLog((prev) => prev + '—————————————————————————— Training Stopped ————————————————————————————\n');
    };

    return (
        <div className="section-card">
            <h2>模型训练过程</h2>
            <div className="result-textbox">
                <h4>训练日志：</h4>
                <textarea readOnly value={trainingLog} rows={15} className="training-log-textarea"/>
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