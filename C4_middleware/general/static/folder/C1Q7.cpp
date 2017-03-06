// 1.7 Write an algorithm such that if an element in an MxN matrix is 0, 
// its entire row or column are set to 0.

#include <iostream>
#include <vector>
#include "..\utils.h"

typedef unsigned int uint;
using namespace std;

#define ROW 3
#define COL 4

void setZero(int** arr, int row, int col)
{
    vector<int> v;
    for (int i = 0; i < col; i++) {
        v.push_back(i);
    }

    for (int rId = 0; rId < row; rId++) {
        for (uint gId = 0; gId < v.size(); gId++) {
            int cId = v[gId];
            if (arr[rId][cId] == 0) {
                // set current row to 0
                for (int i = 0; i < col; i++) {
                    arr[rId][i] = 0;
                }
                // set current col to 0
                for (int i = 0; i < row; i++) {
                    arr[i][cId] = 0;
                }
                // remove current column nuber from v
                v.erase(v.begin() + gId);
                break;
            }
        }
    }
}

int main()
{
    int** arr = new int*[ROW];
    for (int i = 0; i < ROW; i++) {
        arr[i] = new int[COL];
    }

    generateRandomValue2D<int>(arr, ROW, COL, 20);

    printf("original Matrix is: \n");
    print2DMat(arr, ROW, COL);
    printf("\n");

    printf("After setting 0 the matrix is: \n");
    setZero(arr, ROW, COL);
    print2DMat(arr, ROW, COL);
    printf("\n");

    // Deallocate the 2D matrix
    for (int i = 0; i < ROW; i++) {
        delete[] arr[i];
    }
    delete[] arr;
        
}