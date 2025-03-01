import React, { useState, useRef } from 'react';
import '../../styles/Imputation.css';

const TrainingProcess: React.FC = () => {
    const [trainingLog, setTrainingLog] = useState<string>('');
    const [isTraining, setIsTraining] = useState<boolean>(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null); // 用于存储 interval ID

    // 模拟训练日志
    const trainingData = [
        '2025-02-28 08:31:27] Epoch: 1/100, Iteration: 5/16, Lr: 0.0005, Loss: 10.428, MAE: 47.21, MSE: 4158.77',
        '[2025-02-28 08:31:45] Epoch: 1/100, Iteration: 6/16, Lr: 0.0005, Loss: 9.921, MAE: 43.95, MSE: 3892.15',
        '[2025-02-28 08:32:03] Epoch: 1/100, Iteration: 7/16, Lr: 0.0005, Loss: 9.456, MAE: 39.82, MSE: 3617.43',
        '[2025-02-28 08:32:21] Epoch: 1/100, Iteration: 8/16, Lr: 0.0005, Loss: 9.027, MAE: 35.74, MSE: 3345.68',
        '[2025-02-28 08:32:39] Epoch: 1/100, Iteration: 9/16, Lr: 0.0005, Loss: 8.541, MAE: 32.87, MSE: 3073.92',
        '[2025-02-28 08:32:57] Epoch: 1/100, Iteration: 10/16, Lr: 0.0005, Loss: 8.139, MAE: 29.53, MSE: 2798.14',
        '[2025-02-28 08:33:15] Epoch: 1/100, Iteration: 11/16, Lr: 0.0005, Loss: 7.795, MAE: 26.61, MSE: 2522.39',
        '[2025-02-28 08:33:33] Epoch: 1/100, Iteration: 12/16, Lr: 0.0005, Loss: 7.428, MAE: 23.15, MSE: 2250.68',
        '[2025-02-28 08:33:51] Epoch: 1/100, Iteration: 13/16, Lr: 0.0005, Loss: 7.031, MAE: 20.87, MSE: 2003.92',
        '[2025-02-28 08:34:09] Epoch: 1/100, Iteration: 14/16, Lr: 0.0005, Loss: 6.742, MAE: 17.53, MSE: 1798.14',
        '[2025-02-28 08:34:27] Epoch: 1/100, Iteration: 15/16, Lr: 0.0005, Loss: 6.395, MAE: 14.15, MSE: 1582.68',   
        '[2025-02-28 08:34:45] Epoch: 1/100, Iteration: 16/16, Lr: 0.0005, Loss: 6.124, MAE: 13.72, MSE: 1536.84',
        '[2025-02-28 08:35:03] Epoch: 2/100, Iteration: 1/16, Lr: 0.0005, Loss: 5.962, MAE: 12.88, MSE: 1421.57',
        '[2025-02-28 08:35:21] Epoch: 2/100, Iteration: 2/16, Lr: 0.0005, Loss: 5.814, MAE: 11.95, MSE: 1330.22',
        '[2025-02-28 08:35:39] Epoch: 2/100, Iteration: 3/16, Lr: 0.0005, Loss: 5.643, MAE: 11.03, MSE: 1258.41',
        '[2025-02-28 08:35:57] Epoch: 2/100, Iteration: 4/16, Lr: 0.0005, Loss: 5.479, MAE: 10.27, MSE: 1189.76',
        '[2025-02-28 08:36:15] Epoch: 2/100, Iteration: 5/16, Lr: 0.0005, Loss: 5.326, MAE: 9.54, MSE: 1124.93',
        '[2025-02-28 08:36:33] Epoch: 2/100, Iteration: 6/16, Lr: 0.0005, Loss: 5.218, MAE: 8.89, MSE: 1067.25',
        '[2025-02-28 08:36:51] Epoch: 2/100, Iteration: 7/16, Lr: 0.0005, Loss: 5.091, MAE: 8.36, MSE: 1012.48',
        '[2025-02-28 08:37:09] Epoch: 2/100, Iteration: 8/16, Lr: 0.0005, Loss: 4.953, MAE: 7.82, MSE: 958.31',
        '[2025-02-28 08:37:27] Epoch: 2/100, Iteration: 9/16, Lr: 0.0005, Loss: 4.827, MAE: 7.25, MSE: 905.64',
        '[2025-02-28 08:37:45] Epoch: 2/100, Iteration: 10/16, Lr: 0.0005, Loss: 4.713, MAE: 6.91, MSE: 862.17'
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