## 40 Algorithms Every Programmer Should Know
<img src="../imgs/40Algoritmos.PNG" alt="40 Algoritmos" />

### Table of Contents

- [Section 1: Fundamentals and Core Algorithms](Section_1_Fundamentals/)

    - Chapter 1: Overview of Algorithms
    - Chapter 2: Data Structures Used in Algorithms
    - Chapter 3: Sorting and Searching Algorithms
    - Chapter 4: Designing Algorithms
    - Chapter 5: Graph Algorithms

- Section 2: Machine Learning Algorithms
    - Chapter 6: Unsupervised Machine Learning Algorithms
    - Chapter 7: Traditional Supervised Learning Algorithms
    - Chapter 8: Neural Network Algorithms
    - Chapter 9: Algorithms for Natural Language Processing
    - Chapter 10: Recommendation Engines 

- Section 3: Advanced Topics
    - Chapter 11: Data Algorithms
    - Chapter 12: Cryptography
    - Chapter 13: Large-Scale Algorithms
    - Chapter 14: Practical Considerations 326


----- 
Table of Contents
Preface 1
Section 1: Fundamentals and Core Algorithms
Chapter 1: Overview of Algorithms 9
What is an algorithm? 10
The phases of an algorithm 10
Specifying the logic of an algorithm 12
Understanding pseudocode 12
A practical example of pseudocode 13
Using snippets 14
Creating an execution plan 15
Introducing Python packages 16
Python packages 16
The SciPy ecosystem 17
Implementing Python via the Jupyter Notebook 18
Algorithm design techniques 19
The data dimension 20
Compute dimension 21
A practical example 21
Performance analysis 22
Space complexity analysis 23
Time complexity analysis 23
Estimating the performance 24
The best case 24
The worst case 25
The average case 25
Selecting an algorithm 25
Big O notation 26
Constant time (O(1)) complexity 26
Linear time (O(n)) complexity 27
Quadratic time (O(n2)) complexity 27
Logarithmic time (O(logn)) complexity 28
Validating an algorithm 30
Exact, approximate, and randomized algorithms 30
Explainability 31
Summary 32
Chapter 2: Data Structures Used in Algorithms 33
Exploring data structures in Python 34
List 34
Table of Contents
[ ii ]
Using lists 34
Lambda functions 37
The range function 38
The time complexity of lists 39
Tuples 39
The time complexity of tuples 40
Dictionary 40
The time complexity of a dictionary 42
Sets 42
Time complexity analysis for sets 43
DataFrames 44
Terminologies of DataFrames 44
Creating a subset of a DataFrame 45
Column selection 45
Row selection 46
Matrix 46
Matrix operations 47
Exploring abstract data types 47
Vector 48
Stacks 48
The time complexity of stacks 50
Practical example 51
Queues 51
The basic idea behind the use of stacks and queues 53
Tree 53
Terminology 54
Types of trees 54
Practical examples 56
Summary 56
Chapter 3: Sorting and Searching Algorithms 57
Introducing Sorting Algorithms 58
Swapping Variables in Python 58
Bubble Sort 59
Understanding the Logic Behind Bubble Sort 59
A Performance Analysis of Bubble Sort 61
Insertion Sort 61
Merge Sort 63
Shell Sort 65
A Performance Analysis of Shell Sort 66
Selection Sort 67
The performance of the selection sort algorithm 68
Choosing a sorting algorithm 68
Introduction to Searching Algorithms 68
Linear Search 69
The Performance of Linear Search 69
Binary Search 70
The Performance of Binary Search 70
Table of Contents
[ iii ]
Interpolation Search 71
The Performance of Interpolation Search 71
Practical Applications 72
Summary 74
Chapter 4: Designing Algorithms 75
Introducing the basic concepts of designing an algorithm 76
Concern 1 – Will the designed algorithm produce the result we expect? 77
Concern 2 – Is this the optimal way to get these results? 77
Characterizing the complexity of the problem 78
Concern 3 – How is the algorithm going to perform on larger datasets? 81
Understanding algorithmic strategies 81
Understanding the divide-and-conquer strategy 82
Practical example – divide-and-conquer applied to Apache Spark 82
Understanding the dynamic programming strategy 84
Understanding greedy algorithms 85
Practical application – solving the TSP 86
Using a brute-force strategy 87
Using a greedy algorithm 91
Presenting the PageRank algorithm 93
Problem definition 93
Implementing the PageRank algorithm 93
Understanding linear programming 96
Formulating a linear programming problem 96
Defining the objective function 96
Specifying constraints 97
Practical application – capacity planning with linear programming 97
Summary 99
Chapter 5: Graph Algorithms 100
Representations of graphs 101
Types of graphs 102
Undirected graphs 103
Directed graphs 103
Undirected multigraphs 104
Directed multigraphs 104
Special types of edges 105
Ego-centered networks 105
Social network analysis 106
Introducing network analysis theory 107
Understanding the shortest path 108
Creating a neighborhood 108
Triangles 109
Density 109
Understanding centrality measures 109
Degree 110
Betweenness 111
Table of Contents
[ iv ]
Fairness and closeness 111
Eigenvector centrality 112
Calculating centrality metrics using Python 112
Understanding graph traversals 114
Breadth-first search 114
Initialization 115
The main loop 115
Depth-first search 118
Case study – fraud analytics 121
Conducting simple fraud analytics 123
Presenting the watchtower fraud analytics methodology 124
Scoring negative outcomes 125
Degree of suspicion 125
Summary 127
Section 2: Machine Learning Algorithms
Chapter 6: Unsupervised Machine Learning Algorithms 129
Introducing unsupervised learning 130
Unsupervised learning in the data-mining life cycle 130
Current research trends in unsupervised learning 133
Practical examples 133
Voice categorization 134
Document categorization 134
Understanding clustering algorithms 135
Quantifying similarities 135
Euclidean distance 136
Manhattan distance 137
Cosine distance 138
K-means clustering algorithm 139
The logic of k-means clustering 139
Initialization 139
The steps of the k-means algorithm 140
Stop condition 141
Coding the k-means algorithm 141
Limitation of k-means clustering 143
Hierarchical clustering 144
Steps of hierarchical clustering 144
Coding a hierarchical clustering algorithm 145
Evaluating the clusters 146
Application of clustering 146
Dimensionality reduction 147
Principal component analysis 148
Limitations of PCA 151
Association rules mining 151
Examples of use 151
Market basket analysis 152
Association rules 153
Table of Contents
[ v ]
Types of rule 153
Trivial rules 153
Inexplicable rules 154
Actionable rules 154
Ranking rules 155
Support 155
Confidence 156
Lift 156
Algorithms for association analysis 157
Apriori Algorithm 157
Limitations of the apriori algorithm 157
FP-growth algorithm 158
Populating the FP-tree 158
Mining Frequent Patterns 160
Code for using FP-growth 161
Practical application– clustering similar tweets together 163
Topic modeling 164
Clustering 164
Anomaly-detection algorithms 164
Using clustering 165
Using density-based anomaly detection 165
Using support vector machines 165
Summary 166
Chapter 7: Traditional Supervised Learning Algorithms 167
Understanding supervised machine learning 168
Formulating supervised machine learning 169
Understanding enabling conditions 171
Differentiating between classifiers and regressors 172
Understanding classification algorithms 172
Presenting the classifiers challenge 173
The problem statement 173
Feature engineering using a data processing pipeline 174
Importing data 174
 Feature selection 175
One-hot encoding 175
Specifying the features and label 176
Dividing the dataset into testing and training portions 176
Scaling the features 177
Evaluating the classifiers 177
Confusion matrix 178
Performance metrics 178
Understanding overfitting 180
Bias 180
Variance 180
Bias-variance trade-off 180
Specifying the phases of classifiers 181
Decision tree classification algorithm 182
Understanding the decision tree classification algorithm 183
Using the decision tree classification algorithm for the classifiers challenge 184
Table of Contents
[ vi ]
The strengths and weaknesses of decision tree classifiers 185
Strengths 185
Weaknesses 185
Use cases 186
Classifying records 186
Feature selection 186
Understanding the ensemble methods 186
Implementing gradient boosting with the XGBoost algorithm 187
Using the random forest algorithm 188
Training a random forest algorithm 188
Using random forest for predictions 188
Differentiating the random forest algorithm from ensemble boosting 189
Using the random forest algorithm for the classifiers challenge 189
Logistic regression 191
Assumptions 191
Establishing the relationship 191
The loss and cost functions 192
When to use logistic regression 192
Using the logistic regression algorithm for the classifiers challenge 193
The SVM algorithm 194
Using the SVM algorithm for the classifiers challenge 195
Understanding the naive Bayes algorithm 195
Bayes, theorem 196
Calculating probabilities 196
Multiplication rules for AND events 197
The general multiplication rule 197
Addition rules for OR events 197
Using the naive Bayes algorithm for the classifiers challenge 198
For classification algorithms, the winner is... 199
Understanding regression algorithms 199
Presenting the regressors challenge 200
The problem statement of the regressors challenge 200
Exploring the historical dataset 200
Feature engineering using a data processing pipeline 201
 Linear regression 202
Simple linear regression 202
Evaluating the regressors 204
Multiple regression 205
Using the linear regression algorithm for the regressors challenge 205
When is linear regression used? 206
The weaknesses of linear regression 206
The regression tree algorithm 207
Using the regression tree algorithm for the regressors challenge 207
The gradient boost regression algorithm 208
Using gradient boost regression algorithm for the regressors challenge 208
For regression algorithms, the winner is... 209
Practical example – how to predict the weather 209
Summary 212
Chapter 8: Neural Network Algorithms 213
Table of Contents
[ vii ]
Understanding ANNs 214
The Evolution of ANNs 216
Training a Neural Network 218
Understanding the Anatomy of a Neural Network 218
Defining Gradient Descent 219
Activation Functions 222
Threshold Function 222
Sigmoid 223
Rectified linear unit (ReLU) 224
Leaky ReLU 225
Hyperbolic tangent (tanh) 226
Softmax 227
Tools and Frameworks 228
Keras 228
Backend Engines of Keras 228
Low-level layers of the deep learning stack 229
Defining hyperparameters 229
Defining a Keras model 230
Choosing sequential or functional model 232
Understanding TensorFlow 232
Presenting TensorFlow's Basic Concepts 232
Understanding Tensor Mathematics 233
Understanding the Types of Neural Networks 234
Convolutional Neural Networks 235
Convolution 235
Pooling 235
Recurrent Neural Networks 236
Generative Adversarial Networks 236
Transfer Learning 236
Case study – using deep learning for fraud detection 237
Methodology 238
Summary 242
Chapter 9: Algorithms for Natural Language Processing 243
Introducing NLP 244
Understanding NLP terminology 244
Normalization 244
Corpus 245
Tokenization 245
Named entity recognition 245
Stopwords 245
Sentiment analysis 246
Stemming and lemmatization 246
NLTK 247
BoW-based NLP 247
Introduction to word embedding 250
The neighborhood of a word 251
Properties of word embeddings 251
Table of Contents
[ viii ]
Using RNNs for NLP 252
Using NLP for sentiment analysis 253
Case study: movie review sentiment analysis 255
Summary 258
Chapter 10: Recommendation Engines 259
Introducing recommendation systems 260
Types of recommendation engines 260
Content-based recommendation engines 260
Finding similarities between unstructured documents 261
Using a co-occurrence matrix 262
Collaborative filtering recommendation engines 263
Hybrid recommendation engines 265
Generating a similarity matrix of the items 265
Generating reference vectors of the users 266
Generating recommendations 266
Understanding the limitations of recommender systems 267
The cold start problem 267
Metadata requirements 268
The data sparsity problem 268
Bias due to social influence 268
Limited data 268
Areas of practical applications 268
Practical example – creating a recommendation engine 269
Summary 272
Section 3: Advanced Topics
Chapter 11: Data Algorithms 274
Introduction to data algorithms 274
Data classification 275
Presenting data storage algorithms 276
Understanding data storage strategies 276
Presenting the CAP theorem 276
CA systems 277
AP systems 278
CP systems 278
Presenting streaming data algorithms 279
Applications of streaming 279
Presenting data compression algorithms 279
Lossless compression algorithms 280
Understanding the basic techniques of lossless compression 280
Huffman coding 281
A practical example – Twitter real-time sentiment analysis 282
Summary 286
Chapter 12: Cryptography 287
Table of Contents
[ ix ]
Introduction to Cryptography 288
Understanding the Importance of the Weakest Link 288
The Basic Terminology 289
Understanding the Security Requirements 289
Identifying the Entities 290
Establishing the Security Goals 290
Understanding the Sensitivity of the Data 291
Understanding the Basic Design of Ciphers 291
Presenting Substitution Ciphers 292
Understanding Transposition Ciphers 294
Understanding the Types of Cryptographic Techniques 295
Using the Cryptographic Hash Function 295
Implementing cryptographic hash functions 296
Understanding MD5-tolerated 296
Understanding SHA 297
An Application of the Cryptographic Hash Function 298
Using Symmetric Encryption 298
Coding Symmetric Encryption 299
The Advantages of Symmetric Encryption 300
The Problems with Symmetric Encryption 300
Asymmetric Encryption 300
The SSL/TLS Handshaking Algorithm 301
Public Key Infrastructure 303
Example – Security Concerns When Deploying a Machine Learning
Model 304
MITM attacks 305
How to prevent MITM attacks 306
Avoiding Masquerading 307
 Data and Model Encrpytion 307
Summary 310
Chapter 13: Large-Scale Algorithms 311
Introduction to large-scale algorithms 312
Defining a well-designed, large-scale algorithm 312
Terminology 312
Latency 312
Throughput 313
Network bisection bandwidth 313
Elasticity 313
The design of parallel algorithms 313
Amdahl's law 314
Conducting sequential process analysis 314
Conducting parallel execution analysis 315
Understanding task granularity 317
Load balancing 317
Locality issues 318
Enabling concurrent processing in Python 318
Strategizing multi-resource processing 318
Table of Contents
[ x ]
Introducing CUDA 319
Designing parallel algorithms on CUDA 320
Using GPUs for data processing in Python 321
Cluster computing 322
Implementing data processing in Apache Spark 323
The hybrid strategy 325
Summary 325
Chapter 14: Practical Considerations 326
Introducing practical considerations 327
The sad story of an AI Twitter Bot 328
The explainability of an algorithm 328
Machine learning algorithms and explainability 329
Presenting strategies for explainability 329
Implementing explainability 330
Understanding ethics and algorithms 333
Problems with learning algorithms 333
Understanding ethical considerations 334
Inconclusive evidence 334
Traceability 335
Misguided evidence 335
Unfair outcomes 335
Reducing bias in models 335
Tackling NP-hard problems 336
Simplifying the problem 337
Example 337
Customizing a well-known solution to a similar problem 337
Example 337
Using a probabilistic method 338
Example 338
When to use algorithms 338
A practical example – black swan events 339
Four criteria to classify an event as a black swan event 339
Applying algorithms to black swan events 340
Summary 341
Other Books You May Enjoy 342
Index 
