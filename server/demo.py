import numpy as np
from sklearn.preprocessing import StandardScaler

# 1. Giả sử có dữ liệu thực tế (VD: Chiều cao cm, Cân nặng kg)
X_original = np.array([
    [160, 50],
    [170, 65],
    [180, 80]
])

print("--- DỮ LIỆU GỐC ---")
print(X_original)

# 2. Khởi tạo và chuẩn hóa dữ liệu
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_original)

print("\n--- DỮ LIỆU SAU KHI CHUẨN HÓA (StandardScaler) ---")
print(X_scaled)

# 3. Khôi phục dữ liệu gốc bằng inverse_transform
X_restored = scaler.inverse_transform(X_scaled)

print("\n--- DỮ LIỆU SAU KHI KHÔI PHÚC (inverse_transform) ---")
print(X_restored)