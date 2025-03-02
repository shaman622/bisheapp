import React, { useState } from 'react';
import '../../styles/Imputation.css';

const Imputation: React.FC = () => {
    // 不规则时间序列文件上传状态
    const [timeSeriesFile, setTimeSeriesFile] = useState<File | null>(null);
    const [timeSeriesFileName, setTimeSeriesFileName] = useState<string>('未选择文件');

    // 邻接矩阵文件上传状态
    const [adjMatrixFile, setAdjMatrixFile] = useState<File | null>(null);
    const [adjMatrixFileName, setAdjMatrixFileName] = useState<string>('未选择文件');

    // 插补结果状态
    const [imputationResult, setImputationResult] = useState<string>('');

    const [maxImputationLength, setMaxImputationLength] = useState<number>(10); // 最大插补长度

    // 处理不规则时间序列文件选择
    const handleTimeSeriesFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setTimeSeriesFile(file);
            setTimeSeriesFileName(file.name);
        }
    };

    // 处理邻接矩阵文件选择
    const handleAdjMatrixFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setAdjMatrixFile(file);
            setAdjMatrixFileName(file.name);
        }
    };

    // 处理不规则时间序列文件上传
    const handleTimeSeriesUpload = () => {
        if (timeSeriesFile) {
            console.log('上传不规则时间序列文件:', timeSeriesFileName);
            alert(`文件 "${timeSeriesFileName}" 上传成功！`);
        } else {
            alert('请先选择不规则时间序列文件！');
        }
    };

    // 处理邻接矩阵文件上传
    const handleAdjMatrixUpload = () => {
        if (adjMatrixFile) {
            console.log('上传邻接矩阵文件:', adjMatrixFileName);
            alert(`文件 "${adjMatrixFileName}" 上传成功！`);
        } else {
            alert('请先选择邻接矩阵文件！');
        }
    };

    // 处理插补
    const handleImputation = () => {
        if (!timeSeriesFile || !adjMatrixFile) {
            alert('请先上传不规则时间序列文件和邻接矩阵文件！');
            return;
        }
        setImputationResult('插补中...');
        // 模拟插补过程
        setTimeout(() => {
            setImputationResult('插补完成！');
            // 生成一个模拟的下载链接
            const fakeData = new Blob(['模拟插补结果数据'], { type: 'text/plain' });
            // 这里可以设置下载链接的逻辑
        }, 2000);
    };

    // 处理下载文件
    const handleDownload = () => {
        if (!imputationResult) {
            alert('没有可下载的文件！');
            return;
        }

        // 生成默认文件名：系统时间.pkl
        const now = new Date();
        const formattedDate = `${now.getFullYear()}${(now.getMonth() + 1)
            .toString()
            .padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}_${now
            .getHours()
            .toString()
            .padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now
            .getSeconds()
            .toString()
            .padStart(2, '0')}.pkl`;

        const link = document.createElement('a');
        link.href = ''; // 这里需要替换为实际的下载链接
        link.download = formattedDate; // 设置默认文件名
        link.click();
    };

    return (
        <div className="section-card">
            <h2>插补功能</h2>

            {/* 第一部分：上传不规则时间序列文件 */}
            <div className="file-upload-row">
                <h3>上传不规则时间序列文件</h3>
                <div className="file-upload-container">
                    <label htmlFor="time-series-file-input" className="file-label">
                        选择文件
                    </label>
                    <input
                        id="time-series-file-input"
                        type="file"
                        onChange={handleTimeSeriesFileChange}
                        style={{ display: 'none' }}
                    />
                    <span className="file-name">{timeSeriesFileName}</span>
                    <button onClick={handleTimeSeriesUpload} className="upload-button">
                        上传
                    </button>
                </div>
            </div>

            {/* 第二部分：选择邻接矩阵文件 */}
            <div className="file-upload-row">
                <h3>选择邻接矩阵文件</h3>
                <div className="file-upload-container">
                    <label htmlFor="adj-matrix-file-input" className="file-label">
                        选择文件
                    </label>
                    <input
                        id="adj-matrix-file-input"
                        type="file"
                        onChange={handleAdjMatrixFileChange}
                        style={{ display: 'none' }}
                    />
                    <span className="file-name">{adjMatrixFileName}</span>
                    <button onClick={handleAdjMatrixUpload} className="upload-button">
                        上传
                    </button>
                </div>
            </div>            
            <div className="options-checkbox">
                <label>
                    <span>最大插补长度：</span>
                    <input
                        type="number"
                        id="maxImputationLength"
                        name="maxImputationLength"
                        value={maxImputationLength}
                        onChange={(e) => setMaxImputationLength(parseInt(e.target.value))}
                        style={{ marginLeft: '10px', width: '60px' }}
                    />
                </label>
                <p className="option-description">
                    由用户决定是否对长序列连续缺失值进行插补。
                </p>
            </div>

            {/* 第三部分：操作按钮 */}
            <div className="button-group" style={{ marginTop: '20px' }}>
                <button className="submit-button" onClick={handleImputation}>
                    开始插补
                </button>
                <button className="submit-button" onClick={handleDownload} style={{ marginLeft: '10px' }}>
                    下载文件
                </button>
            </div>

            {/* 插补结果显示 */}
            <div className="result-textbox" style={{ marginTop: '20px' }}>
                <h4>插补结果：</h4>
                <textarea
                    readOnly
                    value={imputationResult}
                    rows={3} // 设置文本框高度
                    style={{ width: '100%', resize: 'none' }} // 禁止用户调整大小
                />
            </div>
        </div>
    );
};

export default Imputation;