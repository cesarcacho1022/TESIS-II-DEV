#IMPORTANDO LIBRERIAS
import numpy as np
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import warnings
from sklearn import metrics
from sklearn.linear_model import LogisticRegression
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis
from sklearn.model_selection import train_test_split

#LEYENDA LA DATA
df = pd.read_csv('data/data.csv', delimiter=';')
df.head()