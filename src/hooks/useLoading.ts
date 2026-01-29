import { useState, useCallback } from 'react';

interface LoadingState {
  isLoading: boolean;
  isSubmitting: boolean;
  error: string | null;
  startLoading: () => void;
  stopLoading: () => void;
  startSubmitting: () => void;
  stopSubmitting: () => void;
  setError: (error: string) => void;
  clearError: () => void;
  withLoading: <T>(promise: Promise<T>) => Promise<T>;
  withSubmitting: <T>(promise: Promise<T>) => Promise<T>;
}

export const useLoading = (): LoadingState => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setErrorState] = useState<string | null>(null);

  const startLoading = useCallback(() => setIsLoading(true), []);
  const stopLoading = useCallback(() => setIsLoading(false), []);
  const startSubmitting = useCallback(() => setIsSubmitting(true), []);
  const stopSubmitting = useCallback(() => setIsSubmitting(false), []);
  const setError = useCallback((error: string) => setErrorState(error), []);
  const clearError = useCallback(() => setErrorState(null), []);

  const withLoading = useCallback(async <T,>(promise: Promise<T>): Promise<T> => {
    startLoading();
    try {
      const result = await promise;
      return result;
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
      throw error;
    } finally {
      stopLoading();
    }
  }, [startLoading, stopLoading, setError]);

  const withSubmitting = useCallback(async <T,>(promise: Promise<T>): Promise<T> => {
    startSubmitting();
    try {
      const result = await promise;
      return result;
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred');
      throw error;
    } finally {
      stopSubmitting();
    }
  }, [startSubmitting, stopSubmitting, setError]);

  return {
    isLoading,
    isSubmitting,
    error,
    startLoading,
    stopLoading,
    startSubmitting,
    stopSubmitting,
    setError,
    clearError,
    withLoading,
    withSubmitting,
  };
};

export default useLoading;